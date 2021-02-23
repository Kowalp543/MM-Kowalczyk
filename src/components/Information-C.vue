<template>
    <div class="container-information-C">
        <div class="page-information-C">
            <div class="page-information-C-header">
                <p>KONTAKT</p>
            </div>
            <div class="page-information-C-border"></div>
            <div class="page-information-C-label">
                <div class="page-information-C-label-content">
                    <div class="label-element">
                        <div class="location-2"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></div>
                        <h2>ADRES</h2>
                        <p>Gabinety Lekarskie</p>
                        <p>ul. Leszczyńskiego 25</p>
                        <p>20-069 Lublin</p>
                    </div>
                    <div class="label-element">
                        <div class="clock-2"><font-awesome-icon :icon="['far', 'clock']" /></div>
                        <h2>GODZINY PRACY</h2>
                        <p>Pn-Pt: 16:00-20:00</p>
                        <p>Sob: 12:00-16:00</p>
                    </div>
                    <div class="label-element">
                        <div class="phone-4"><font-awesome-icon icon="phone" :transform="{ rotate: 100 }"/></div>
                        <h2>KONTAKT</h2>
                        <p>tel. 604 540 510</p>
                        <!-- <p>mmkowalczyk25@gmail.com</p> -->
                    </div>
                </div>
            </div>
            <!-- <div class="page-information-C-registration">
               <div class="button-C"><button class="btn-mydr-pp" data-doctor="małgorzatakowalczyk" data-speciality="" data-visitkind="" data-evisit="false" data-appname="drw" data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbG10eV9pZCI6MTc5MTh9.xKOWbPssUgM2WIxVj-NSSbQ_uRKwm9WJwPmFhXLx9rY">Rejestracja Online</button></div>
            </div> -->
            <div class="mapbox">
                <MglMap :mapboxGl="mapbox-gl" :accessToken="accessToken" :mapStyle.sync="mapStyle" @load="onMapLoaded"/>
            </div>
        </div>
    </div>
</template>

<script>


    //ZAPISY ONLINE

    // const mydrScript = document.getElementByTagName('script')[0];
    // const js = document.createElement('script');
    // js.src = "https://mydr.pl/static/mydr-pp.min.js";
    // mydrScript.parentNode.insertBefore(js, mydrScript);

    // js.onload = () => {
    //     const PatientsPlugin = new window.PatientsPlugin;
    //     PatientsPlugin.init({
    //         app: 'https://mydr.pl/patients_plugin',
    //         plugin: 'https://mydr.pl/static',
    //     });
    // };


    import Mapbox from "mapbox-gl";
    import { MglMap } from "vue-mapbox";

    export default {
    components: {
        MglMap
    },
    data() {
        return {
        accessToken: 'pk.eyJ1Ijoia293YWxwIiwiYSI6ImNrbDd4NWliNjA2bjMyd29iN29iZDU4czMifQ._BuE0B5cP3FIQXdPH5qmQw',
        mapStyle: 'mapbox://styles/kowalp/ckl7xgckq0qr617o29ruc0ymz' // your map style
        };
    },

    created() {
        // We need to set mapbox-gl library here in order to use it in template
        this.mapbox = Mapbox;
    }
    };


</script>


<style>
/* #map {
    height: 500px;
} */
.mapbox{
    height: 400px;
    width: 100%;
}

.container-information-C{
    width: 80vw;
    margin: 0 auto;
}

.page-information-C{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.page-information-C-header{
    margin-top: 25px;
}

.page-information-C-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 0px;
}

.page-information-C-border{
    height: 8px;
    width: 84px;
    background-color: #C7BA9F;
    margin-top: 10px;
}

.page-information-C-label{
    width: 80vw;
    margin-top: 42px;
}

.page-information-C-label-content{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-bottom: 60px;
}

.label-element{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.label-element h2{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 12px;
    margin-bottom: 4px;
}

.label-element p{
    font-size: 18px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 8px;
}

.location-2{
    color: #C7BA9F;
    font-size: 23px;
}

.clock-2{
    color: #C7BA9F;
    font-size: 23px;
}

.phone-4{
    color: #C7BA9F;
    font-size: 20px;
}

/* .page-information-C-registraton{
    align-items: center;
    text-align: center;

}
.button-C a{
    text-decoration: none;
}

.button-C{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 200px;
    background-color: khaki;
    margin-bottom: 70px;
} */

@media screen and (max-width: 480px){
    body{
        overflow-x: hidden;
    }
    .page-information-C-header p{
        font-size: 25px;
    }
    .page-information-C-border{
        height: 6px;
    }
    .page-information-C-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .label-element{
        margin-top: 30px;
    }
    .page-information-map{
        display: none;
    }
}

@media screen and (min-width: 481px) and (max-width: 701px){
    .page-information-C-header p{
        font-size: 34px;
    }
    .page-information-C-label-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .label-element{
        margin-top: 30px;
    }
    .page-information-map{
        display: none;
    }
}

</style>