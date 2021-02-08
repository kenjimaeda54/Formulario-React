import React, {Component} from 'react';


class index extends Component{
     constructor(props){
       super(props);
       this.state={
         form:{
           nome:'',
           email:'',
           senha:'',
           sexo:'masculino',
           error:""
          }
       }
       this.mudanca = this.mudanca.bind(this);
    } 
    mudanca(e){
      let form = this.state.form;
      form[e.target.name] = e.target.value;
      //e.target.name(ficar atentendo estou pegando litaralmente o 
      //name no campo input name="nome",utilizar dentro do "" valores
      // que eta no campo form em state)
      this.setState({form:  form});
 
    }
    
    render(){
       return(
         <div>
           <h1>Cadastro</h1>
           {this.state.form.error && <p>Ops!!Falta algo</p>}
           <label>Nome</label>
           <input type="text" name="nome" value={this.state.form.nome}
                  onChange={this.mudanca}/><br/>
           <label>E-mail</label>
           <input type="text" name="email" value={this.state.form.email}
                  onChange={this.mudanca}/><br/>
           <label>Senha</label> 
           <input type="password" name="senha" value={this.state.form.senha}
                  onChange={this.mudanca}/><br/>
           <label>Sexo</label>
           <select name="sexo" value={this.state.form.sexo} 
                   onChange={this.mudanca}><br/>
           <option value="masculino">Masculino</option>
           <option value="feminino">Feminino</option>
           </select>               
           <div>
             <h3>{this.state.form.nome}</h3>
             <h3>{this.state.form.email}</h3>
             <h3>{this.state.form.senha}</h3>
             <h3>{this.state.form.sexo}</h3>
           </div>
           
         </div>
       );
     }
}
export default index;