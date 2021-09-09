<script>
import { Container } from "svelte-materialify";

</script>
<div  style="border:solid " class="container">

    <div class ="center">
        <slot />
        
    </div>
</div>
<style>

    .container {
        height: 100%;
        width:100%;
        position: relative;
        display:flex;
        align-items: center;
        justify-content: center;
        /* border: 3px solid green; */

        /* border: 10px solid; */
        /* background-image: url("../static/background.jpeg") */
    
    }
    
    .center {
        margin: 0;
        /* position: absolute; */
        /* top: 50%; */
        margin:0px 10px !important;
        display:flex;
        align-items: center;
        justify-content: center;
        /* border: 10px solid; */
        /* left: 50%; */
        width: 100%;
        /* -ms-transform: translate(-50%, -50%); */
        /* transform: translate(-50%, -50%); */
    }
    </style>