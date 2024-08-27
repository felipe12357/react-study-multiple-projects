import { getCategories } from "@/src/primaHandler";
import CategoryIconComponent from "../../components/categoryIcon";
import LogoComponent from "../../components/logo";

const OrderSideBarComponent = async()=>{

    const categories = await getCategories();
    return(
        <aside className="md:w-72 md:h-screen bg-white">
            <LogoComponent />
            <nav className="mt-10">
                {   categories.map(category =>
                        <CategoryIconComponent category={category} key={category.id}></CategoryIconComponent>
                )}
            </nav>
        </aside>
    )
}
export default OrderSideBarComponent;