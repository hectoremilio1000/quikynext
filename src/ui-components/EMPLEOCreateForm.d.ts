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
export declare type EMPLEOCreateFormInputValues = {
    nombre?: string;
    email?: string;
    whatsappNumber?: string;
    vacante?: string;
};
export declare type EMPLEOCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    whatsappNumber?: ValidationFunction<string>;
    vacante?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMPLEOCreateFormOverridesProps = {
    EMPLEOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    whatsappNumber?: PrimitiveOverrideProps<TextFieldProps>;
    vacante?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EMPLEOCreateFormProps = React.PropsWithChildren<{
    overrides?: EMPLEOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EMPLEOCreateFormInputValues) => EMPLEOCreateFormInputValues;
    onSuccess?: (fields: EMPLEOCreateFormInputValues) => void;
    onError?: (fields: EMPLEOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMPLEOCreateFormInputValues) => EMPLEOCreateFormInputValues;
    onValidate?: EMPLEOCreateFormValidationValues;
} & React.CSSProperties>;
export default function EMPLEOCreateForm(props: EMPLEOCreateFormProps): React.ReactElement;
