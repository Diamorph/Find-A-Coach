<template>
    <div>
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </base-card>
        </section>
        <section>
            <base-card>
                <header>
                    <h2>Interested? Reach out now!</h2>
                    <base-button link :to="contactLink" v-if="!isInContactPage">Contact</base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <section>
            <base-card>
                <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
                <p>{{ description }}</p>
            </base-card>
        </section>
    </div>
</template>

<script>
export default {
    name: "coachDetail",
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    computed: {
        fullName() {
            return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        },
        contactLink() {
            return `${this.$route.path}/contact`;
        },
        isInContactPage() {
            return this.$route.path.includes('contact');
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(c => c.id === this.id);
    }
}
</script>

<style scoped>

</style>
