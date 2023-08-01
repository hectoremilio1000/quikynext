/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EMPLEO } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EMPLEOUpdateFormInputValues = {
    nombre?: string;
    email?: string;
    whatsappNumber?: string;
    vacante?: string;
};
export declare type EMPLEOUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    whatsappNumber?: ValidationFunction<string>;
    vacante?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMPLEOUpdateFormOverridesProps = {
    EMPLEOUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    whatsappNumber?: PrimitiveOverrideProps<TextFieldProps>;
    vacante?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EMPLEOUpdateFormProps = React.PropsWithChildren<{
    overrides?: EMPLEOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eMPLEO?: EMPLEO;
    onSubmit?: (fields: EMPLEOUpdateFormInputValues) => EMPLEOUpdateFormInputValues;
    onSuccess?: (fields: EMPLEOUpdateFormInputValues) => void;
    onError?: (fields: EMPLEOUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMPLEOUpdateFormInputValues) => EMPLEOUpdateFormInputValues;
    onValidate?: EMPLEOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EMPLEOUpdateForm(props: EMPLEOUpdateFormProps): React.ReactElement;
