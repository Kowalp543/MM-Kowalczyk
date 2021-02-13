<template>
    <div class="container-about">
        <div class="page-about">
            <div class="page-about-header">
                <p>O GABINECIE</p>
            </div>
            <div class="page-about-border"> </div>
            <div class="page-about-content">
                <p>Szanowni Państwo witamy na stronie naszego gabinetu. Możecie Państwo
                liczyć na profesjonalne porady z zakresu okulistyki, ze szczególnym
                uwzględnieniem problematyki okulistyki wieku dziecięcego. Zapewniamy
                też Państwu porady z zakresu diabetologii, w tym leczenie cukrzycy typu I,
                typu II oraz problemów związanych z cukrzycą w ciąży.</p>
            </div>
            <div class="page-about-button">
                <router-link to="okulista"><div class="button"><p>OKULISTA</p></div></router-link>
                <router-link to="diabetolog"><div class="button"><p>DIABETOLOG</p></div></router-link>
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

.container-about{
    width: 100%;
    margin: 0 auto;
}

.page-about{
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;
}

.page-about-header p{
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 16px;
}

.page-about-border{
    background-color: #C7BA9F;
    height: 8px;
    width: 84px;
}

.page-about-content {
    width: 50vw;
}

.page-about-content p{
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin-top: 56px;
}

.page-about-button{
    margin-top: 64px;
    display: flex;
    justify-content: space-evenly;
    width: 50vw;
}

.button{
    height: 48px;
    width: 160px;
    border: 2px solid #C7BA9F;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 0px 0px 20px -15px #000000;
    box-shadow: 0px 0px 20px -15px #000000;
    border-radius: 10px 10px 10px 10px;
}

.button p{
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #C7BA9F;
}

.page-about-button a{
    text-decoration: none;

}

.button:hover{
    transform: scale(0.9);
	opacity: 0.8;
}

@media screen and (max-width: 320px){
    .page-about-header p{
        font-size: 25px;
        margin-bottom: 16px;
    }
    .page-about-content {
        width: 80vw;
    }
    .page-about-button{
        width: 100%;
        margin-top: 40px;
    }
    .button{
        margin-top: 20px;
    }
    .page-about-content p{
        font-size: 12px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 0;
    }
    .page-about-button{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        width: 50vw;
    }

}

@media screen and (min-width: 321px) and (max-width: 380px){
    .page-about-header p{
        font-size: 27px;
        margin-bottom: 16px;
    }
    .page-about-content {
        width: 80vw;
    }
    .page-about-button{
        width: 100%;
        margin-top: 40px;
    }
    .button{
        margin-top: 20px;
    }
    .page-about-content p{
        font-size: 12px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 0;
    }
    .page-about-button{
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        width: 50vw;
    }

}


@media screen and (min-width: 381px) and (max-width: 480px){
    .page-about-header p{
        font-size: 30px;
        margin-bottom: 16px;
    }
    .page-about-content{
        width: 70vw;
    }
    .page-about-button{
        width: 100%;
        margin-top: 40px;
    }
    .button{
        margin-top: 20px;
    }
    .page-about-content p{
        font-size: 14px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 0;
    }
}

@media screen and (min-width: 481px) and (max-width: 600px){
    .page-about-content{
        width: 70vw;
    }
    .page-about-button{
        width: 80%;
        margin-top: 40px;
    }
    .button{
        margin-top: 20px;
    }
    .page-about-content p{
        font-size: 14px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 0;
    }
}

@media screen and (min-width: 601px) and (max-width: 769px){
    .page-about-content{
        width: 60vw;
    }
    .page-about-button{
        width: 80%;
        margin-top: 40px;
    }
    .button{
        margin-top: 20px;
    }
    .page-about-content p{
        font-size: 14px;
    }
}


</style>