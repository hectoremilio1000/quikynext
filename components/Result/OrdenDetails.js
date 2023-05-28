import { useOrdenDetailsContext } from "@/context/OrdenDetailsContext";
import { Backdrop, Box, CircularProgress, Fade, Modal } from "@mui/material";
import PrintResult from "./PrintResult";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    overflow: 'auto',
    backgroundColor: 'white',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
    zIndex: 50000001,
};
function OrdenDetails({open, handleClose}) {
    const {           
        orden,
        pruebas,
        doctor,
        patient,
        loading
    } = useOrdenDetailsContext();
    return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
    >
        <Fade in={open}>
            <Box sx={style}>
                <div style={{position:'relative'}}>
                    <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">Orden Details</h3>
                    <button onClick={handleClose} style={{position:'absolute', top:0, right:5}}>x</button>
                </div>
                {
                    loading
                    ? <CircularProgress />
                    : <PrintResult pruebas={pruebas} doctor={doctor} patient={patient} orden={orden}/>
                }
            </Box>
        </Fade>

    </Modal>);
}

export default OrdenDetails;