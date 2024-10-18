import {TextFieldsOutlined } from "@mui/icons-material"
import {FormControl, TextField } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import "./Cadastro.css"

function Cadastro(){
    return(
        <div>

            <div className="cadastro">
                <div className="nome">
                    
                    <div className="primeiro">
                    <TextField
                        label="Primeiro Nome*"
                    
                    />
                    </div>
                    <div className="segundo">
                        <TextField
                            label="Sobrenome*"
                        />
                    </div>
                </div>
                <div className="email">
                    <TextField
                        label="Email*"
                        fullWidth
                    />
                </div>

                <div className="senha">
                    <TextField
                        label="Senha*"
                        fullWidth
                    />
                </div>
            </div>
            <div className="checkbox">
                <FormControlLabel control={<Checkbox />} label="Eu quero receber promoções e atualizações via email." />                    
            </div>

            <div className="button">
                <Button variant="contained" fullWidth>Cadastrar</Button>
            </div>

            <div className="link">
                <Button href="entrar" size="medium" id="link-button">Já tem uma conta? Entrar</Button>
            </div>

        </div>
    )
}

export default Cadastro