import React from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "react-bootstrap";

const steps = [
    "Selecciona el Test",
    "Reserva y manda tu ubicación",
    "Recibe al Laboratorista",
    "Checa el resultado",
];

function PasosCitas() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const isStepOptional = step => {
        return step === 1;
    };

    const isStepSkipped = step => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Container>
            <div className="rowQh">
                <h1 className="title1Model text-center">
                    Recuerda cómo funciona el servicio a domicilio
                </h1>
            </div>

            <Box sx={{ width: "100%" }} className="rowQh">
                <Stepper activeStep={activeStep} className="stepper1">
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">
                                    Todo es confidencial y seguro
                                </Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Estos son cada uno de los pasos - ¡Así de sencillo!
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Empieza de nuevo</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Atrás
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Saltar
                                </Button>
                            )}

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Terminaste" : "Siguiente"}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Container>
    )
}

export default PasosCitas