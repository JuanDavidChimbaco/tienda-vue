<template>
    <div class="container mt-4">
        <div class="card shadow m-4">
            <div class="card-body">
                <h3 class="card-title">Deja un comentario</h3>
                <form @submit.prevent="submitComment" class="my-4">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre:</label>
                        <input type="text" id="name" v-model="name" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico:</label>
                        <input type="email" id="email" v-model="email" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="comment" class="form-label">Comentario:</label>
                        <textarea id="comment" v-model="comment" class="form-control" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar comentario</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            comment: '',
        };
    },
    methods: {
        submitComment() {
            console.log('Comentario enviado:', this.name, this.email, this.comment);

            this.name = '';
            this.email = '';
            this.comment = '';
        },
    },
};
</script>
  