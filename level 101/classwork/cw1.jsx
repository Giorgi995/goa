function App() { 
    const [accounts, setAccounts] = useState([]);
    const [account, setAccount] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();

        const newAccount = {
            email: e.target.email.value,
            pass: e.target.pass.value
        }

        const alreadyExists = accounts.some((acc) => acc.email === newAccount.email)
        
        if(!alreadyExists) {
            setAccounts([...accounts, newAccount])
            alert("Account successfuly created!")
        } else {
            alert("Account already exists")
        }
    }

    const SignIn = (e) => {
        console <Register>
      e.preventDefault();
        
        const credentionals = {
            email: e.target.email.value,
            pass: <e className="target"></e> 
                   }

        const isLoggedIn = accounts.find((acc) => acc.email === credentionals.email && acc.pass === credentionals.pass)

        if(isLoggedIn) {
            setAccount(credentionals)
            alert("Login in successful")
        } else {
            alert("Invalid credentationals, please try again")
        }
    };

    const logout = (e) => {
        setAccount(null)
    }

    return (
        <main>
            {account === null ? (
                <section>
                    <h2>Registration</h2>
                    <form onSubmit={Register}>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="pass" required />
                        <button>Register</button>
                    </form>

                    <form onSubmit={SignIn}>
                        <h2>Sign In</h2>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="pass" required />
                        <button>Sign In</button>
                    </form>
            </section>
            ) : (
                <section>
                    <h1>Welcome {account.email}</h1>
                    <button onClick={logout}>Register</button>
                </section>

            )}
            
        </main>
    )
}

export default App;
