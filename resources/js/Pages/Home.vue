<template>
    <div>
        <div class="btn" role="button">
            <div>Here</div>
        </div>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
    components: {
        DataTable,
        Column
    },
    data() {
        return {
            cars: [
                { "brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
            ]
        }
    }
}
</script>

<style lang="scss">
.btn {
    border: 0;
    margin: 0;
    padding: 0.5em 2em;
    background-color: steelblue;
    color: white;
    cursor: pointer;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: currentColor;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
        pointer-events: none;
    }

    &:hover::before {
        opacity: 0.17;
    }
}
</style>