import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            countries: [],
            flagImgURL: null
        },
        allCountries: {
            population: 0
        },
        mounted: function(){
            this.fetchCountry();
        },
        computed: {
            totalPopulation: function(){
                return this.countries.reduce((total, country) => {
                    return total + country.population
                }, 0);
            },

            filteredCountriesByFlag: function() {
                return this.countries.map((country) => {
                    return country.flag = this.flagImgURL;
                });
            },
            
        },
    
        methods: {
            fetchCountry: function(){
                fetch("https://restcountries.eu/rest/v2/all")
                .then( response => response.json () )
                .then( data => this.countries = data )
                // .then( data => console.log(data) )
            },
            
        },

    });
});