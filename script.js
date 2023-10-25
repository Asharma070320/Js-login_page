const form = document.getElementById('validationForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const usernamePattern = /^[A-Z][a-zA-Z0-9]{7,}$/;
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

     
            const usernameIsValid = usernamePattern.test(username);
            const passwordIsValid = passwordPattern.test(password);

            document.getElementById('usernameError').textContent = usernameIsValid ? '' : 'Username is invalid.';
            document.getElementById('passwordError').textContent = passwordIsValid ? '' : 'Password is invalid.';

     
            if (usernameIsValid && passwordIsValid) {
                alert(`Username: ${username}\nPassword: ${password}\nRemember Me: ${document.getElementById('rememberMe').checked ? 'Yes' : 'No'}`);
            }
        });
        document.getElementById('cancelBtn').addEventListener('click', function () {
            form.reset();
            document.getElementById('usernameError').textContent = '';
            document.getElementById('passwordError').textContent = '';
        });