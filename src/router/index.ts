import {createRouter, createWebHistory} from "@ionic/vue-router";
import {RouteRecordRaw} from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/tabs/categories",
	},
	{
		path: "/tabs/",
		component: TabsPage,
		children: [
			{
				path: "",
				redirect: "/tabs/categories",
			},
			{
				path: "categories",
				name: "categories",
				component: () => import("@/views/CategoryPage.vue"),
			},
			{
				path: "tab2",
				component: () => import("@/views/Tab2Page.vue"),
			},
			{
				path: "tab3",
				component: () => import("@/views/Tab3Page.vue"),
			},
			{
				path: "search-cleaning",
				name: "search-cleaning",
				component: () => import("@/views/SearchCleaning.vue"),
			},
		]
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
