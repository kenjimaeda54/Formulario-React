import React, {Component} from 'react';


class index extends Component{
     constructor(props){
       super(props);
       this.state={
        error:'',
        form:{
           nome:'',
           email:'',
           senha:'',
           sexo:'masculino',
             }
        }
       this.mudanca = this.mudanca.bind(this);
       this.cadastro = this.cadastro.bind(this)
    } 
    mudanca(e){
      let form = this.state.form;
      form[e.target.name] = e.target.value;
      //e.target.name(ficar atentendo estou pegando litaralmente o 
      //name no campo input name="nome",utilizar dentro do "" valores
      // que eta no campo form em state)
      this.setState({form:  form});
 
    }
    cadastro(event){
      const{nome, email, senha, sexo} = this.state.form;
      if(nome !== '' && email !=='' && senha !=='' && sexo !==''){
        alert(`Nome: ${nome} \n E-mail: ${email} \n Senha: ${senha} \n Sexo: ${sexo} ` );
      }else{
        this.setState({error:"Ops falta preencher campos"});
      }
      event.preventDefault();
    }
    
    render(){
       return(
         <div>
           <h1>Cadastro</h1>
           {this.state.error && <p>{this.state.error}</p>}
           <form onSubmit={this.cadastro}>
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
                   onChange={this.mudanca}>
           <option value="masculino">Masculino</option>
           <option value="feminino">Feminino</option>
           </select> <br/>                        
           <button type="submit">Cadastrar</button>
           </form>
         </div>
       );
     }
}
export default index;