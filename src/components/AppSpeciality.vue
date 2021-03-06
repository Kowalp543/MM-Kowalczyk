<template>
    <div class="container-specialty">
        <div class="page-specialty">
            <div class="page-specialty-header">
                <p>NASZA SPECJALNOŚĆ</p>
            </div>
            <div class="page-specialty-border"></div>
            <div class="page-specialty-box">
                <div class="page-specialty-box-1">
                    <div class="specialty">
                        <div class="specialty-photo"><img class="widget" width="255" height="312" alt="Dobór okularów" src=""></div>
                        <div class="specialty-content">
                            <p>DOBÓR OKULARÓW</p>
                        </div>
                        <div class="specialty-border"></div>
                    </div>
                    <div class="specialty">
                        <div class="specialty-photo"><img class="widget" width="255" height="312" alt="Okulistyka dziecięca" src=""></div>
                        <div class="specialty-content">
                            <p>OKULISTYKA DZIECIĘCA</p>
                        </div>
                        <div class="specialty-border"></div>
                    </div>
                </div>
                <div class="page-specialty-box-2">
                    <div class="specialty">
                        <div class="specialty-photo"><img class="widget" width="255" height="312" alt="Zakładanie pomp insulinowych" src="~@/assets/W3.jpg/"></div>
                        <div class="specialty-content">
                            <p>ZAKŁADANIE POMP INSULINOWYCH</p>
                        </div>
                        <div class="specialty-border"></div>
                    </div>
                    <div class="specialty">
                        <div class="specialty-photo"><img class="widget" width="255" height="312" alt="Cukrzyca typu pierwszego i drugiego" src="~@/assets/W4.jpg/"></div>
                        <div class="specialty-content">
                            <p>CUKRZYCA TYPU PIERWSZEGO I DRUGIEGO</p>
                        </div>
                        <div class="specialty-border"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style>

*{
    box-sizing: border-box;
}

.container-specialty{
    width: 100%;
    margin: 0 auto;
}

.page-specialty{
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    align-items: center;
}

.page-specialty-header{
    text-align: center;
}

.page-specialty-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
}

.page-specialty-border{
    height: 8px;
    width: 84px;
    background-color: #e4bc9b;
}

.page-specialty-box, .page-specialty-box-1, .page-specialty-box-2{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
}
.page-specialty-box-1, .page-specialty-box-2{
    display: flex;
    justify-content: space-around;
}

.specialty{
    height: 446px;
    width: 255px;
    -webkit-box-shadow: 0px 0px 20px -15px #000000;
    box-shadow: 0px 0px 20px -15px #000000;
    transition: all 0.5s ease-in-out;
}

.specialty:hover{
    transform: scale(0.96);
    opacity: 0.9;
}

.specialty-photo{
    height: 312px;
    background-color: #FAF8F6;
    border-radius: 10px 10px 0 0;
}

.specialty-content{
    text-align: center;
    padding: 15px;
    height: 126px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.specialty-content p{
    font-size: 16px;
    letter-spacing: 1px;
}

.specialty-border{
    height: 8px;
    width: 255px;
    background-color: #e4bc9b;
}

.widget{
    /* height: 312px;
    width: 255px; */
    border-radius: 10px 10px 0 0;
    aspect-ratio: attr(width) / attr(height);

}

@media screen and (max-width: 320px){
    .page-specialty-box, .page-specialty-box-1, .page-specialty-box-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .specialty{
        margin-top: 30px;
    }
    .page-specialty-header p{
        font-size: 25px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
    .page-specialty-border{
        height: 6px;
    }
}

@media screen and (min-width:321px) and (max-width: 380px){
    body{
        overflow-x: hidden;
    }
    .page-specialty-box, .page-specialty-box-1, .page-specialty-box-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .specialty{
        margin-top: 30px;
    }
    .page-specialty-header p{
        font-size: 27px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
    .page-specialty-border{
        height: 6px;
    }
}


@media screen and (min-width:381px) and (max-width: 480px){
    .page-specialty-box, .page-specialty-box-1, .page-specialty-box-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .specialty{
        margin-top: 30px;
    }
    .page-specialty-header p{
        font-size: 30px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
    .page-specialty-border{
        height: 6px;
    }
}

@media screen and (min-width:481px) and (max-width: 600px){
    .page-specialty-box, .page-specialty-box-1, .page-specialty-box-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .specialty{
        margin-top: 30px;
    }
    .page-specialty-header p{
        font-size: 34px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
}

@media screen and (min-width: 601px) and (max-width: 769px){
    .page-specialty-box, .page-specialty-box-1, .page-specialty-box-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .specialty{
        margin-top: 40px;
    }
    .page-specialty-header p{
        font-size: 34px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
}

@media screen and (min-width: 769px) and (max-width: 1150px){
    .page-specialty-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0px;
    }
    .page-specialty-box-1, .page-specialty-box-2{
        display: flex;
        justify-content: space-evenly;
    }
    .specialty{
        margin-top: 0px;
    }
    .page-specialty-header p{
        font-size: 34px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
}

@media screen and (min-width: 1300px) and (max-width: 1500px){
    .page-specialty-box{
        width: 90%;
    }
}

@media screen and (min-width: 1500px){
    .page-specialty-box{
        width: 80%;
    }
}

</style>