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
export declare type LABORATORIOCreateFormInputValues = {
    nombre?: string;
    createdBy?: string;
    direction?: string;
    cp?: string;
    rfc?: string;
    contactPhone?: string;
    codSerial?: string;
};
export declare type LABORATORIOCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    direction?: ValidationFunction<string>;
    cp?: ValidationFunction<string>;
    rfc?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    codSerial?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LABORATORIOCreateFormOverridesProps = {
    LABORATORIOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    direction?: PrimitiveOverrideProps<TextFieldProps>;
    cp?: PrimitiveOverrideProps<TextFieldProps>;
    rfc?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    codSerial?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LABORATORIOCreateFormProps = React.PropsWithChildren<{
    overrides?: LABORATORIOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LABORATORIOCreateFormInputValues) => LABORATORIOCreateFormInputValues;
    onSuccess?: (fields: LABORATORIOCreateFormInputValues) => void;
    onError?: (fields: LABORATORIOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LABORATORIOCreateFormInputValues) => LABORATORIOCreateFormInputValues;
    onValidate?: LABORATORIOCreateFormValidationValues;
} & React.CSSProperties>;
export default function LABORATORIOCreateForm(props: LABORATORIOCreateFormProps): React.ReactElement;
