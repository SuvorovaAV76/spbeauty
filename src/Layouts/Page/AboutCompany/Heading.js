import SecondaryButton from "../../../Components/SecondaryButton";
function Heading() {
    return (
        <div className='d-flex mt-5 flex-column'>
            <div className='d-flex flex-row justify-content-between'>
                <h1 className='large-title'>Данные о компании</h1>
                <SecondaryButton>Закрыть запись</SecondaryButton>
            </div>
        </div>
    );
}

export default Heading;