import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import agent from '../../../Api/agent';
import { CurrentDate } from '../../../hooks/twoWeek';
import { LevelLang } from '../../../Model/utils/levelLang';
import { UserContext } from '../../../pages/_app';
import { ArrowSvg } from '../../../svg/ArrowSVG';
import ButtonUI from '../../UI/Button';
import InputUI from '../../UI/Input';
import SelectUI from '../../UI/Select';
import SweetAlertBody from '../../UI/sweetAlert/body';
import styles from './index.module.css'
import Select from 'react-select'
type TalkAddModalProps = {
    max?:any
}
type forsate = {
    id?: number;
    value?:string|number,
    name?: string;
    label?:string
    code: string;
}


const customStyles = {
    menuList: (styles:any) => ({
      ...styles,
      background: '#fff'
  }),
  option: (styles:any , {isFocused, isSelected}:any):any => ({
      ...styles,
      background: isFocused
          ? '#E6F9FC'
          : isSelected
              ? '#00C1DD'
              : undefined,
      zIndex: 1
  }),
 

    control: () => ({
      // none of react-select's styles are passed to <Control />
      border: "none",
      display: "flex",
      width: 170,
     
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

const TalkAddModal: React.FC<TalkAddModalProps> = ({max}) => {
    const [data, dispatch] = useContext(UserContext);
    const [language, setlanguage] = useState<forsate[] | null>(null)
    const [activeLang, setactiveLang] = useState<forsate | null>(null)
    const [CheckActiveTime, setCheckActiveTime] = useState<null|string>(null)
    const fetchApiLang = async () => {
        const res = await agent.Common.langList();
        res && setlanguage(res.data)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues
    } = useForm();

    const handleOnSubmit = async (data: any) => {
        if(!CheckActiveTime){
            return toast.error("Saat seçilməyib!");
        }
        if (!activeLang?.value||! activeLang) {
         
            
            return toast.error("Dil seçin!");
        }
        const date = new Date(data.startDate)
        var month = date.getUTCMonth() + 1; //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        data.startDate = (day < 10 ? '0' + day : day) + "-" + (month < 10 ? '0' + month : month) + "-" + year + ' ' + data.time + ":00";
        data.languageId = activeLang?.value
        console.log(data);
        const res = await agent.teacher.addConvation(data)
        res&&   dispatch({type:'setModalActive', payload:<SweetAlertBody title="Söhbətiniz yaradıldı" text="Dərsə zamanı şəxsi kabinetdən söhbəti başlada bilərsiniz"/>})


    }
    useEffect(() => { fetchApiLang() }, [])

    
    return (
        <section className={styles.modulebody}>
            <header>
                <div>
                    <h4>Yeni söhbətin yaradılması</h4>
                    <p >Məlumatları qeyd edərək söhbət yaradın</p>
                </div>

            <div style={{marginRight:'20px'}}>
            <Select
          options={language?.map((item:any)=>({label:item.name, value:item.id}))}
          styles={customStyles}
          placeholder={<p className={styles.paragraph}>Dil seçimi </p>}
          onChange={(val:any)=>setactiveLang(val)}
        />
            </div>
            </header>
            <main>
                <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className={styles.historyform}>
                        <div>
                            <InputUI type={'date'} label="Tarix" id={32423432} name="startDate" width="236px" register={register} errors={errors}   min={CurrentDate(1)} max={CurrentDate(14 - Number(new Date().getDay()==0?7:new Date().getDay()))} />
                        </div>
                        <div className={styles.historyFOrmTIme}>
                            <SelectUI
                            width="200px"
                            
                                arrow={false}
                                custom_element={
                                    <>
                                    <label htmlFor="" className={styles.timeLabel}>Saat</label>
                                    <p className={styles.activeParagraph}>{CheckActiveTime}</p>
                                    </>
                                }

                            >
                                <div className={styles.timeParent}>


                                    <li  > <label htmlFor="forTimeCalendarFirst">00:00  <input onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}    type="radio"  id="forTimeCalendarFirst"  value="00:00" /></label>  </li>
                                 
                                    <li  > <label htmlFor="forTimeCalendarsecond">01:00  <input type="radio" id="forTimeCalendarsecond" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}    {...register('time')} value="01:00" /></label> </li>
                                    <li  > <label htmlFor="forTimeCalendarsecondthird"> 02:00  <input type="radio" id="forTimeCalendarsecondthird" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="02:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarFourth"> 03:00  <input type="radio" id="forTimeCalendarFourth" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="03:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarFifth"> 04:00  <input type="radio" id="forTimeCalendarFifth" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="04:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarsixes"> 05:00  <input type="radio" id="forTimeCalendarsixes" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="05:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarseven"> 06:00  <input type="radio" id="forTimeCalendarseven" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="06:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarseght"> 07:00  <input type="radio" id="forTimeCalendarseght" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="07:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarsnine"> 08:00  <input type="radio" id="forTimeCalendarsnine" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="08:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarsnten"> 09:00  <input type="radio" id="forTimeCalendarsnten" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="09:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarsneleven"> 10:00  <input type="radio" id="forTimeCalendarsneleven"onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="10:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarsntwelf"> 11:00  <input type="radio" id="forTimeCalendarsntwelf" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="11:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarthirdteen"> 12:00  <input type="radio" id="forTimeCalendarthirdteen" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="12:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarfourteen"> 13:00  <input type="radio" id="forTimeCalendarfourteen" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="13:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarfifteen"> 14:00  <input type="radio" id="forTimeCalendarfifteen" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="14:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarsextenn"> 15:00  <input type="radio" id="forTimeCalendarsextenn" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="15:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarseeventeen"> 16:00  <input type="radio" id="forTimeCalendarseeventeen" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="16:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendaregtheen"> 17:00  <input type="radio" id="forTimeCalendaregtheen" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="17:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendarnineteen"> 18:00  <input type="radio" id="forTimeCalendarnineteen" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="18:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendartwenty"> 19:00  <input type="radio" id="forTimeCalendartwenty" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="19:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendartwentyone"> 20:00  <input type="radio" id="forTimeCalendartwentyone" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="20:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendartwentytwo"> 21:00  <input type="radio" id="forTimeCalendartwentytwo"onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="21:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendartwentthird"> 22:00  <input type="radio" id="forTimeCalendartwentthird" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="22:00" /></label></li>
                                    <li  > <label htmlFor="forTimeCalendartwentyfourth"> 23:00  <input type="radio" id="forTimeCalendartwentyfourth" onClick={(e:any)=>{setCheckActiveTime(e.target.value); e.stopPropagation()}}  {...register('time')}  value="23:00" /></label></li>



                                </div>

                            </SelectUI>
                            {/*  <InputUI type={'time'}  label="Saat" id={23455654} name="time"  width="236px"   register={register}/> */}
                        </div>
                    </div>
                    <div className={styles.lblstr}>   {
                        LevelLang.map((item, i) => (
                            <InputUI key={i} label={item} id={9955500 + i} name="levelStr" width="20px" height="20px" value={item} register={register}  type="radio" />
                        ))
                    }</div>


                    <InputUI label="Mövzu" id={76767574654} name="title" width="100%" register={register} errors={errors} />
                    <InputUI label="Müzakirə üçün material (link)" id={764654} name="infoVideoLink" width="100%" register={register} errors={errors}  required={false}/>
                    <div className={styles.submitform}> <ButtonUI text="Təsdiqlə" width="100%" height="56px" /></div>
                </form>
            </main>
            <footer>

            </footer>
        </section>
    );
}


export default TalkAddModal;