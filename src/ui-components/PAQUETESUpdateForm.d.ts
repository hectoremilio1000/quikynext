/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PAQUETES } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PAQUETESUpdateFormInputValues = {
    nombre?: string;
    precioTotal?: number;
};
export declare type PAQUETESUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    precioTotal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PAQUETESUpdateFormOverridesProps = {
    PAQUETESUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    precioTotal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PAQUETESUpdateFormProps = React.PropsWithChildren<{
    overrides?: PAQUETESUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pAQUETES?: PAQUETES;
    onSubmit?: (fields: PAQUETESUpdateFormInputValues) => PAQUETESUpdateFormInputValues;
    onSuccess?: (fields: PAQUETESUpdateFormInputValues) => void;
    onError?: (fields: PAQUETESUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PAQUETESUpdateFormInputValues) => PAQUETESUpdateFormInputValues;
    onValidate?: PAQUETESUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PAQUETESUpdateForm(props: PAQUETESUpdateFormProps): React.ReactElement;
