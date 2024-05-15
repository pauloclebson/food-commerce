import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome e sobrenome são obrigatórios.')
      .min(4, 'Nome muito curto')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    email: yup
      .string()
      .email('O email é obrigatório')
      .required('O email deve ser válido.'),
    mobile: yup
      .string()
      .required('O celular é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'Celular inválido.', (value) => isValidPhone(value)),
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateDocument',
        'O CPF/CNPJ é inválido',
        (value) => isValidCPF(value) || isValidCNPJ(value)),
    zipCode: yup
      .string()
      .required('O CEP é obrigatório.')
      .transform((val) => val.replace(/[^\d]+/g, '')),
    street: yup.string().required('O endereço é obrigatório.'),
    number: yup.string().required('O número é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O bairro é obrigatório.'),
    city: yup.string().required('A cidade é obrigatória.'),
    state: yup.string().required('O estado é obrigatório.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
