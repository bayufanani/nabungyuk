import { type Router } from "vue-router";

export function backToMainOrBack(router: Router, mainRouteName: string) {
    if (window.history.state.back == null)
        router.push({ name: mainRouteName, replace: true });
    router.back();
}
