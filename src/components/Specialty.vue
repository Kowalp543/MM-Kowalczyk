<template>
    <div class="container-specialty">
        <div class="page-specialty">
            <div class="page-specialty-header">
                <p>NASZA SPECJALNOŚĆ</p>
            </div>
            <div class="page-specialty-border"></div>
            <div class="page-specialty-box">
                <div class="specialty">
                    <div class="specialty-photo"><img class="widget" src="~@/assets/widget.1.png/"></div>
                    <div class="specialty-content">
                        <p>DOBÓR OKULARÓW</p>
                    </div>
                    <div class="specialty-border"></div>
                </div>
                <div class="specialty">
                    <div class="specialty-photo"></div>
                    <div class="specialty-content">
                        <p>OKULISTYKA DZIECIĘCA</p>
                    </div>
                    <div class="specialty-border"></div>
                </div>
                <div class="specialty">
                    <div class="specialty-photo"><img class="widget" src="~@/assets/widget.3.png/"></div>
                    <div class="specialty-content">
                        <p>ZAKŁADANIE POMP INSULINOWYCH</p>
                    </div>
                    <div class="specialty-border"></div>
                </div>
                <div class="specialty">
                    <div class="specialty-photo"><img class="widget" src="~@/assets/widget.4.png/"></div>
                    <div class="specialty-content">
                        <p>CUKRZYCA TYPU PIERWSZEGO I DRUGIEGO</p>
                    </div>
                    <div class="specialty-border"></div>
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
    background-color: #C7BA9F;
}

.page-specialty-box{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 80px;
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
    background-color: #C7BA9F;
}

.widget{
    height: 312px;
    width: 255px;
    border-radius: 10px 10px 0 0;
}


@media screen and (max-width: 480px){
    .page-specialty-box{
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

}

</style>