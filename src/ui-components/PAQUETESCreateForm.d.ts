/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PAQUETESCreateFormInputValues = {
    nombre?: string;
    precioTotal?: number;
};
export declare type PAQUETESCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    precioTotal?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PAQUETESCreateFormOverridesProps = {
    PAQUETESCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    precioTotal?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PAQUETESCreateFormProps = React.PropsWithChildren<{
    overrides?: PAQUETESCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PAQUETESCreateFormInputValues) => PAQUETESCreateFormInputValues;
    onSuccess?: (fields: PAQUETESCreateFormInputValues) => void;
    onError?: (fields: PAQUETESCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PAQUETESCreateFormInputValues) => PAQUETESCreateFormInputValues;
    onValidate?: PAQUETESCreateFormValidationValues;
} & React.CSSProperties>;
export default function PAQUETESCreateForm(props: PAQUETESCreateFormProps): React.ReactElement;
