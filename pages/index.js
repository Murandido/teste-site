function HomePage() {
    function alertSucefullPHP(json){
        alert('Olha o log!');
        console.log(json);
    }

    function alertFailedPHP(){
        alert('Deu errado');
    }
    
    function PHPRestAPI() {
        fetch('../api/api.php', {
            method: 'GET',
            headers: {"Content-Type": "application/json;charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => alertSucefullPHP(json))
        .catch(err => alertFailedPHP(err));
    }

    return (
        <div>
            <h1>Olá mundo!</h1>
            <p>Sou uma página de teste com NextJS, se você está vendo, que bom!</p>
           <button onClick={PHPRestAPI}>Teste PHP</button>
        </div>
    );
}

export default HomePage;