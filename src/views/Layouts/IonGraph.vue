<script>
import {
    Bar
} from 'vue-chartjs';

export default {
    name: 'IonGraph',
    extends: Bar,
    mounted() {
        this.renderChart([22, 22, 33, 22],"")
    },
};
</script>
