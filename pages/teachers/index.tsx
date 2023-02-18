import { useEffect, useRef, useState } from "react";
import agent from "../../Api/agent";
import TeacherCotainer from "../../container/teacher";
import Aside from "../../layout/aside";
import { GenericDTO, GenericListDto, ITeacher } from "../../Model/DTO";
import { FilterSVG } from "../../svg/filterSVG";
import styles from "./index.module.css";
type TeacherProps = {};


let arr: any = [];
  let arrNation: any = [];
const Teacher: React.FC<TeacherProps> = () => {
  const [teachers, setteachers] = useState<GenericListDto<ITeacher[]> | null>(
    null
  );
  const [otherData, setotherData] = useState<{
    lang: { id: number; name: string; code?: string | null }[] | null;
    nation: { id: number; name: string; code?: string }[] | null;
  }>({ lang: null, nation: null });
  const inputSearch = useRef<any>(null);
  async function fetchTeacher() {
    const res = await agent.teacher.list();
    res && res.data && setteachers(res.data);
    const lang = await agent.Common.langList();
    const nation = await agent.Common.notianal();

    lang &&
      nation &&
      setotherData({ ...otherData, lang: lang.data, nation: nation.data });
  }
  
  async function filterTeacher(param: { group: string; id: number }) {
    if (param.group === "Dillər") {
      if (arr.includes(param.id)) {
        arr.splice(arr.indexOf(param.id), 1);
      } else {
        arr.push(param.id);
      }
    } else if (param.group === "Milliyət") {
      
      if (arrNation.includes(param.id)) {
        
        
        arrNation.splice(arrNation.indexOf(param.id), 1);
      } else {
        arrNation.push(param.id);
      }

      console.log(arrNation,'log arr');
    }
    
    
    const res = await agent.teacher.list(
      arr,
      inputSearch.current.value,
      arrNation
    );
    res && res.data && setteachers(res.data);
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await agent.teacher.list(
      arr,
      inputSearch.current.value,
      arrNation
    );
    res && res.data && setteachers(res.data);
  }
  useEffect(() => {
    fetchTeacher();
  }, []);
  function handlefilterActive(){
    
    
    setfilterActive(false)
  }
  const [filterActive, setfilterActive] = useState<any>(false)
  function reset(){
    arr = [];
  arrNation = [];
setotherData({ lang: null, nation: null })
 
   fetchTeacher()
 }
  return (
    <div className={styles.teacher}>
                <div className={styles.fixedFilterBUtton} onClick={()=>setfilterActive(true)}>
          <span><FilterSVG/></span>
          <p>Filterləri göstər</p>
        </div>
      <div className="wrapper">
        <div className={styles.searchForm}>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Müəlimin adını daxil edin"
              ref={inputSearch}
            />
            <div className={styles.buttonParent}>
              <button type="submit"></button>
            </div>
          </form>
        </div>
        <h3>Bütün müəllimlər</h3>
        <div>
          <Aside
          reset={reset}
           filter={filterActive}
            setList={filterTeacher}
            setfilter={handlefilterActive}
            list={[
              { name: "Dillər", children: otherData.lang },
            /*   { name: "Milliyət", children: otherData.nation }, */
            ]}
          />
          <TeacherCotainer list={teachers?.entities} />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
