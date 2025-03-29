import React from "react";
import { useNavigate } from "react-router-dom";

import * as zod from "zod";

import { useCart } from "../../context/CartContext";
import { useErrors } from "../../context";

import { Products } from "./Products";
import { Order } from "./Order";

import { CartContainer } from "./ShoppingCartStyles";

const cartDataValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP Invalido").max(8, "CEP Invalido"),
  rua: zod.string().nonempty("Rua é obrigatória"),
  numero: zod
    .string()
    .min(1, "Numero obrigatorio")
    .max(5, "Numero obrigatorio"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "Bairro é obrigatório"),
  cidade: zod.string().min(1, "Cidade é obrigatória"),
  uf: zod.string().length(2, "UF deve ter 2 caracteres"),

  paymentMethod: zod.enum(["credit", "debit", "money"], {
    errorMap: () => ({
      message:
        "Método de pagamento inválido. Escolha entre 'crédito', 'débito' ou 'dinheiro'.",
    }),
  }),
});

export function ShoppingCart() {
  const { setCartData, formData, setFormData } = useCart();
  const { setErrors } = useErrors();
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === "cep" && value.length == 8) {
      console.log("nome:", name, value);
      formatCep(value).then((newValue) => {
        console.log("novo valor", value);
        setFormData((prevData) => ({
          ...prevData,
          rua: newValue.street || "",
          bairro: newValue.neighborhood || "",
          cidade: newValue.city || "",
          uf: newValue.state || "",
          cep: value,
        }));

        if (newValue.street) {
          setErrors((prevErrors) => {
            const { rua, bairro, cidade, uf, ...newErrors } = prevErrors;
            return newErrors;
          });
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setErrors((prevErrors) => {
      const { [name]: _, ...newErrors } = prevErrors;
      return newErrors;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationResult = cartDataValidationSchema.safeParse(formData);
    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    setCartData([]);
    navigate("/orderConfirmed");
  }

  async function formatCep(cep: string) {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      const data = await response.json();
      return data;
    } catch (e) {
      return {
        neighborhood: "",
        street: "",
        state: "",
        city: "",
      };
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CartContainer>
        <Order onInputChange={handleInputChange} />
        <Products />
      </CartContainer>
    </form>
  );
}
