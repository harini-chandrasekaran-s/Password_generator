import './checkbox.css'
function Checkbox(props){
    const {value,onChange}=props;
    return(
        <>
        <input className='box' type="checkbox" checked={value} onChange={onChange} />
        </>
    )
}
export default Checkbox;