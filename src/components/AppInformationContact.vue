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
                        <p>Sprawdź wybranego</p>
                        <p>lekarza</p>
                    </div>
                    <div class="label-element">
                        <div class="phone-4"><font-awesome-icon icon="phone" :transform="{ rotate: 100 }"/></div>
                        <h2>KONTAKT</h2>
                        <!-- <p>tel. 604 540 510</p> -->
                        <a href="tel: +48604540510">tel. 604 540 510</a>
                        <!-- <p>mmkowalczyk25@gmail.com</p> -->
                    </div>
                </div>
            </div>
            <!-- <div class="page-information-C-registration">
                <button class="btn-mydr-pp" data-doctor="" data-speciality="" data-visitkind="" data-evisit="false" data-appname="drw" data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYWNpbGl0eV9pZCI6MTc5MTh9.xKOWbPssUgM2WIxVj-NSSbQ_uRKwm9WJwPmFhXLx9rY"></button>
            </div> -->
            <div class="page-information-C-Tips">
                <div class="page-information-C-Tips-header">
                    <h2>Jak do nas trafić?</h2>
                </div>
                <p>Gabinet zlokalizowany jest w centrum miasta, w budynku Active Residence przy ulicy Stanisława Leszczyńskiego 25,
                na przeciwko sklepu Stokrotka. Przed budynkiem znajduje się parking miejski (Strefa B). Pod sam budynek można też dojechać autobusem linii: 12, 44, 74.
                W pobliżu gabinetu (300m) położony jest Ogród Saski.</p>
            </div>
            <div class="mapbox">
                <MglMap :mapboxGl="mapbox-gl" :accessToken="accessToken" :mapStyle.sync="mapStyle" @load="onMapLoaded"/>
            </div>
        </div>
    </div>
</template>

<script>

    const mydrScript = document.getElementsByTagName('script')[0];
    const js = document.createElement('script');
    js.src = "https://mydr.pl/static/mydr-pp.min.js";
    mydrScript.parentNode.insertBefore(js, mydrScript);

    js.onload = () => {
        const PatientsPlugin = new window.PatientsPlugin;
        PatientsPlugin.init({
            app: 'https://mydr.pl/patients_plugin',
            plugin: 'https://mydr.pl/static',
        });
    };



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
    background-color: #e4bc9b;
    margin-top: 10px;
}

.page-information-C-label{
    width: 80vw;
    margin-top: 80px;
}

.page-information-C-label-content{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-bottom: 80px;
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
    color: #e4bc9b;
    font-size: 25px;
}

.clock-2{
    color: #e4bc9b;
    font-size: 25px;
}

.phone-4{
    color: #e4bc9b;
    font-size: 25px;
}

.label-element a{
    text-decoration: none;
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    margin-top: 8px;
}

.page-information-C-Tips{
    margin-bottom: 36px;
}

.page-information-C-Tips-header h2{
    font-size: 20px;
    font-weight: 600;
}

.page-information-C-Tips p{
    margin-bottom: 0px;
    text-align: justify;
}

/* .page-information-C-registration{
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 80px;
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
    .page-information-C-Tips-header h2{
    font-size: 18px;
    }
    .page-information-C-Tips p{
        font-size: 12px;
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