import { Plus } from "lucide-react";
import MenuBaritem from "./MenuBaritem";
import ButtonEditor from "../../../components/ButtonEditor";
import useCategoriesStore from "../../../stores/categoriesStore";
import { menuUIType } from "../QuizAdmin";

/**
 * @typedef {{
 *  menu: menuUIType[]
 *  handleSelectMenu: (menuId: number): void
 *  selectMenu: number
 *  btnCreate: menuUIType
 *  handleClickCreate: (menuId: number): void
 *  hdlSelectCategory: (categoryName: string): void
 * }}
 */
var MenuBarPropTypes;

/**
 *
 * @param {MenuBarPropTypes} param0
 * @returns
 */
function MenuBar({
  menu,
  handleSelectMenu,
  selectMenu,
  btnCreate,
  handleClickCreate,
  hdlSelectCategory,
}) {
  const { categories } = useCategoriesStore();
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          {menu?.map((item, index) => (
            <MenuBaritem
              key={index}
              icon={item.icon}
              label={item.label}
              id={item.id}
              selectMenu={selectMenu}
              handleSelectMenu={() => handleSelectMenu(item.id)}
              btn={selectMenu === item.id ? "active" : "cancel"}
            />
          ))}

          {(selectMenu === 3 || selectMenu === 1) && (
            <>
              <div className="h-9 bg-white w-[1px]"></div>
              <select
                onChange={(e) => hdlSelectCategory(e.target.value)}
                defaultValue={""}
                className="select text-wihite border-pink-q border bg-transparent rounded-2xl cursor-pointer"
              >
                <option disabled={true} value={""}>
                  Please select category
                </option>
                <option value={""}>All Category</option>
                {categories
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  .map((category) => (
                    <option key={category?.id} value={category?.name}>
                      {category?.name}
                    </option>
                  ))}
              </select>
            </>
          )}
        </div>

        <ButtonEditor handleClick={() => handleClickCreate(btnCreate.id)}>
          <Plus strokeWidth={1.5} width={18} height={18} />
          <span>{btnCreate.create}</span>
        </ButtonEditor>
      </nav>
    </>
  );
}
export default MenuBar;
