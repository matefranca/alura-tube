import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

// Custom Hook
function useForm(formProps){
    const [values, setValues] = useState(formProps.initialValues);

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            setValues({
                ...values,
                [e.target.name]: value,
            })
        },
        clearForm() {
            setValues({})
        }
    };
}

export default function RegisterVideo() {
    const formRegister = useForm({
        initialValues: { title: "Fros punk", url: "asushas" }
    });
    const [formVisible, setFormVisible] = useState(false);

    return (
        <StyledRegisterVideo>
            <button 
            type="button" 
            className="add-video" 
            onClick={() => setFormVisible(true)}>
                + 
            </button>
            {formVisible && (
                <form onSubmit={(e) => {
                e.preventDefault();
                console.log(formRegister.values);
                setFormVisible(false);
                formRegister.clearForm();
                }}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisible(false)}>
                            x 
                        </button>
                        <input 
                            placeholder="Video title" 
                            name="title"
                            value={formRegister.values.title} 
                            onChange={formRegister.handleChange}/>
                        <input 
                            placeholder="URL" 
                            name="url"
                            value={formRegister.values.url} 
                            onChange={formRegister.handleChange}/>
                        <button type="submit">Register</button>
                    </div>
            </form>
            )}
        </StyledRegisterVideo>
  );
}
