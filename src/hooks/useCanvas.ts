import {onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, shallowRef} from "vue";





export function useCanvas(dom:string | HTMLCanvasElement) {
    const canvas = shallowRef();



    onMounted(() => {
        if (typeof dom === 'string') {
            canvas.value = document.getElementById(dom);
        } else if (dom instanceof HTMLCanvasElement) {
            canvas.value = dom;
        } else {
            throw new Error('dom is not a string or HTMLCanvasElement');
        }
    })


    onBeforeUpdate(() => {
        console.log("onBeforeUpdate")
    })
    onUpdated(() => {
        console.log("onUpdated")
    })
    onBeforeUnmount(() => {
        console.log("onBeforeUnmount")
    })
    onUnmounted(() => {
        console.log("onUnmounted")
    })
    return {}
}
