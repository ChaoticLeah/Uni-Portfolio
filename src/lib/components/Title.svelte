<script lang="ts">
    export let title : string;
    export let src : string;

	import { base } from '$app/paths';

</script>

<svelte:head>
    <title>Leah's Portfolio - {title}</title>
</svelte:head>

<!-- <img src={`${dev ? '' : 'Uni-Portfolio/'}${src}`} {alt} />
 -->
<div class="rounded-lg w-full h-64 bg-cover flex items-center justify-center" style="background-image: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), url({base}/ProjectThumbnails/{src});">
    <h1 class="xl:!text-8xl sm:!text-6xl drop-shadow-2xl">{ title }</h1>
</div>

<style>
    div {
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
    }
</style>