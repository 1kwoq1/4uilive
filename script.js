        // Получаем элементы
        const registrationModal = document.getElementById('registrationModal');
        const loginModal = document.getElementById('loginModal');
        const supportModal = document.getElementById('supportModal');
        const openModalBtn = document.getElementById('openModal');
        const closeModalBtn = document.getElementById('closeModal');
        const closeLoginModalBtn = document.getElementById('closeLoginModal');
        const closeSupportModalBtn = document.getElementById('closeSupportModal');
        const switchToLoginBtn = document.getElementById('switchToLogin');
        const switchToRegisterBtn = document.getElementById('switchToRegister');
        const forgotPasswordBtn = document.getElementById('forgotPassword');
        const faqLinkBtn = document.getElementById('faqLink');
        const togglePasswordBtns = document.querySelectorAll('.toggle-password');
        const registrationForm = document.querySelector('.registration-form');
        const loginForm = document.querySelector('.login-form');
        const supportForm = document.querySelector('.support-form');
        const registrationInputs = registrationForm.querySelectorAll('input');
        const loginInputs = loginForm.querySelectorAll('input');
        const supportInputs = supportForm.querySelectorAll('input, textarea');

        // Функция для полной очистки формы регистрации
        function resetRegistrationForm() {
            registrationInputs.forEach(input => {
                if (input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
            
            const passwordFields = ['password', 'confirmPassword'];
            passwordFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.type = 'password';
                }
            });
            
            resetPasswordButtons();
        }

        // Функция для полной очистки формы входа
        function resetLoginForm() {
            loginInputs.forEach(input => {
                input.value = '';
            });
            
            const loginPasswordField = document.getElementById('loginPassword');
            if (loginPasswordField) {
                loginPasswordField.type = 'password';
            }
            
            resetPasswordButtons();
        }

        // Функция для полной очистки формы поддержки
        function resetSupportForm() {
            supportInputs.forEach(input => {
                input.value = '';
            });
        }

        // Функция для сброса кнопок показа пароля
        function resetPasswordButtons() {
            togglePasswordBtns.forEach(btn => {
                btn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                `;
            });
        }

        // Функция закрытия всех модальных окон
        function closeAllModals() {
            registrationModal.style.display = 'none';
            loginModal.style.display = 'none';
            supportModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Открытие модального окна регистрации
        openModalBtn.addEventListener('click', () => {
            closeAllModals();
            registrationModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            resetRegistrationForm();
        });

        // Открытие модального окна поддержки
        faqLinkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            supportModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            resetSupportForm();
        });

        // Переключение на модальное окно входа
        switchToLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            loginModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            resetLoginForm();
        });

        // Переключение на модальное окно регистрации
        switchToRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            registrationModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            resetRegistrationForm();
        });

        // Закрытие модального окна регистрации
        closeModalBtn.addEventListener('click', () => {
            closeAllModals();
            resetRegistrationForm();
        });

        // Закрытие модального окна входа
        closeLoginModalBtn.addEventListener('click', () => {
            closeAllModals();
            resetLoginForm();
        });

        // Закрытие модального окна поддержки
        closeSupportModalBtn.addEventListener('click', () => {
            closeAllModals();
            resetSupportForm();
        });

        // Закрытие при клике вне модального окна
        registrationModal.addEventListener('click', (e) => {
            if (e.target === registrationModal) {
                closeAllModals();
                resetRegistrationForm();
            }
        });

        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                closeAllModals();
                resetLoginForm();
            }
        });

        supportModal.addEventListener('click', (e) => {
            if (e.target === supportModal) {
                closeAllModals();
                resetSupportForm();
            }
        });

        // Переключение видимости пароля
        togglePasswordBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const targetInput = document.getElementById(targetId);
                
                if (targetInput.type === 'password') {
                    targetInput.type = 'text';
                    btn.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                        </svg>
                    `;
                } else {
                    targetInput.type = 'password';
                    btn.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    `;
                }
            });
        });

        // Обработка отправки формы регистрации
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            
            alert('Регистрация успешна!');
            closeAllModals();
            resetRegistrationForm();
        });

        // Обработка отправки формы входа
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Здесь можно добавить логику проверки данных
            alert('Вход выполнен успешно!');
            closeAllModals();
            resetLoginForm();
        });

        // Обработка отправки формы поддержки
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('supportEmail').value;
            const question = document.getElementById('supportQuestion').value;
            
            // Здесь можно добавить логику отправки вопроса
            alert('Ваш вопрос отправлен! Мы свяжемся с вами в ближайшее время.');
            closeAllModals();
            resetSupportForm();
        });

        // Обработка "Забыли пароль?"
        forgotPasswordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Функция восстановления пароля будет добавлена позже');
        });

        // Закрытие модального окна при нажатии Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (registrationModal.style.display === 'flex' || 
                    loginModal.style.display === 'flex' || 
                    supportModal.style.display === 'flex') {
                    closeAllModals();
                    resetRegistrationForm();
                    resetLoginForm();
                    resetSupportForm();
                }
            }
        });


        document.getElementById('TournamentSchedule').addEventListener('click', function() {
        window.location.href = 'index2.html';
        });