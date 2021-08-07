function login (username, password){
    if(Username == 'fatah' && Password == 'zaki'){
        function goHome (){
            console.log('halaman Home');
        }
        return goHome
    }else {
        if (Username == 'fatah'){
            if(Password == 'zaki'){
                function goHome(){
                    console.log('Halaman Home'); 
                }
                return goHome
            }else {
                function backLogin (){
                    console.log('Login Gagal');
                }
                return backLogin
            }
        }else {
            function backLogin(){
                console.log('Login Gagal')
            }
            return backLogin
        }
    }
}
let Username = prompt('Masukan Username')
let Password = prompt('Masukan Password')

let cobaLogin = login(Username, Password)
cobaLogin()