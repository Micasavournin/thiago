
const Page5 = () => {
    const pinterestUrl = "https://drive.google.com/drive/folders/15HCg5UCKgnP3whZ1d2Vn8pae5ckK2x58?usp=drive_link";
    return (
        <div className="contenedor">
                <img src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%203%20(BODA)-05.jpg?alt=media&token=f96cc7e1-0d30-4267-965a-aaf192d07cbe" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <a
            style={{ position: 'absolute', top: '79%', left: '50%', transform: 'translate(-50%, -50%)'}}
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="botonInspo">

          Inspo
        </button>

        </a>
            
        </div>
        )
    }


export default Page5