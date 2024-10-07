<!--9 Реалізуйте компонент, який використовує v-model для налаштування власного введення даних. -->
<!--10 Реалізуйте розширену валідацію форми, використовуючи v-model для управління станом форми і виведенням повідомлень про помилки. -->
<!-- 11 Створіть форму з різними типами полів вводу (текст, число, чекбокс) і використайте v-model для двонаправленого зв'язування даних. 
    Змініть значення моделі в коді і перевірте, чи змінилось значення в полі вводу, і навпаки. -->
<template>
    <div>
        <form class="form-task" @submit.prevent="handleSubmit">
            <p class="h4">Task 9 - 11</p>
            <div class="form-group">
                <label class="h5">Login</label>
                <input type="text" class="form-control" placeholder="Enter Login" v-model="formData.name">
                <span v-if="errors.name" class="text-danger">{{ errors.name}}</span>
            </div>
            <div class="form-group">
                <label class="h5">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="formData.password">
                <span v-if="errors.password" class="text-danger">{{ errors.password}}</span>
            </div>
            <div class="form-group">
                <label class="h5">Age</label>
                <input type="number" class="form-control" placeholder="Password" v-model="formData.age">
                <span v-if="errors.password" class="text-danger">{{ errors.password}}</span>
            </div>
            <p class="h5" style="margin-top: 10px;">Gender</p>
            <div class="form-check">             
                <input class="form-check-input" type="radio" value="male" v-model="formData.gender">
                <label class="form-check-label" for="exampleRadios1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="female" v-model="formData.gender">
                <label class="form-check-label" for="exampleRadios2">
                    Female
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <CustomInput 
                v-model="formData.customValue"
            />
        </form>
        <div class="task-margin">
            {{ formData }}
        </div>

        <div class="task-margin">
            <!-- 12 Реалізуйте компонент лічильника, який використовує v-model для управління його значенням. 
    Компонент повинен мати кнопки для збільшення та зменшення значення лічильника. -->
            <p class="h4">Task 12</p>
            <p class="h4">Counter Result: <span style="color: red">{{ counterResult }}</span></p>
            <Counter v-model="counterResult" />
        </div>

        <div class="task-margin">
            <!-- 13 Створіть компонент перемикача (toggle), який використовує v-model. 
                Компонент повинен міняти свій стан та виводити різні значення в залежності від свого стану. -->
            <!-- 14 Використовуйте v-model для динамічної зміни класів елемента на основі даних, введених користувачем. -->
            <p class="h4">Task 13 - 14</p>
            <p class="h4">Toggle</p>
            <CustomToggle v-model="isToggled" />
        </div>

        <div class="task-margin" style="margin-bottom: 250px;">
            <!-- 15 Завдання: Створити компонент "Select Component" з використанням v-model -->
            <p class="h4">Task 15</p>
            <p class="h4">Custom Select</p>
            <CustomSelect :options="['Option 1', 'Option 2', 'Option 3', 'Option 4']" v-model="selectOptions"/>
            <p class="h5">Choose: {{ selectOptions }}</p>
        </div>
    </div>
</template>

<script>
    import CustomInput from '../components/CustomInput.vue'
    import Counter from '../components/Counter.vue'
    import CustomToggle from '../components/CustomToggle.vue'
    import CustomSelect from '../components/CustomSelect.vue'

    export default {
        name: 'Form',
        components: {
            CustomInput,
            Counter,
            CustomToggle,
            CustomSelect
        },
        data() {
            return {
                formData: {
                    name: '',
                    password: '',
                    customValue: '',
                    gender: '',
                    age: 0,
                },
                counterResult: 0,
                errors: {},
                submittedData: null,
                isToggled: true,
                selectOptions: ''
            }
        },
        methods: {
            validateForm() {    
                const errors = {}

                if(!this.formData.name) {
                    errors.name = 'Login is empty'
                }

                if(!this.formData.password) {
                    errors.password = 'Password is empty'
                } else if (this.formData.password > 8) {
                    errors.password = 'Password must be 8 characters long'
                }

                this.errors = errors

                return Object.keys(errors).length === 0
            },
            handleSubmit() {
                if(this.validateForm()) {
                    this.submittedData = this.formData
                    if(this.formData.name === 'admin'){
                        localStorage.setItem('adminToken', 'admin-token')
                        localStorage.setItem('authToken', 'example-token');
                    }
                    else {
                        localStorage.setItem('authToken', 'example-token');
                    }
                    alert('Form submitted successfully')

                    this.formData.name = ''
                    this.formData.password = ''
                    this.errors = {}
                } else {
                    alert('Correct errors in the form')
                }
            },
        }
    }
</script>

<style scoped> 
    .form-task {
        width: 350px;
        margin: 0 auto;
        text-align: left;
    }
    .form-group {
        margin-top: 25px;
    }
    .btn {
        margin-top: 25px;
    }
    label {
        margin-bottom: 10px;
    }
    .form-control {
        border: 1px solid black;
    }
    .form-check-input {
        border: 1px solid black;
    }
    .task-margin{
        margin-top: 25px;
    }
</style>