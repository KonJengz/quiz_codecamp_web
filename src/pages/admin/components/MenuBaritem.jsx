import ButtonEditor from "../../../components/ButtonEditor";

function MenuBaritem({ icon: Icon, label, handleSelectMenu, id, btn }) {
  return (
    <ButtonEditor handleClick={handleSelectMenu} btn={btn}>
      <Icon strokeWidth={1.5} width={18} height={18} />
      <span>{label}</span>
    </ButtonEditor>
  );
}
export default MenuBaritem;
