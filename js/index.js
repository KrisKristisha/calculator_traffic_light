let phase = Array()
let stripe = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let intensities = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20]
let number = 0
let train_routes = Array()
let single_train_routes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let l = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let w = 5; // расстояние от пешеходного перехода до пересечения проезжей части
let b = 5; // расстояние от пересечения до пешеходного перехода
let c = 3.5; // ширина полосы
let d = 4; // ширина пешеходного перехода
let g = 1; // расстояние от стоп линии до пешеходного перехода
let road_size = 3.5 /* ширина полосы 3.5 метра  */
let road_raz = 1920
let road_size_values = [1850, 1920,1970,2075,2475, 2700]
let road_size_metres = [3, 3.5,3.8,4.2,4.8, 5]
let v_train = 25
let promtact_yellow = 0
let promtact_red = 0
let t_ph = []
let T_itog = 0
let sov_pol = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let sov = Array()
let ped_phase = -1
let tram_phase = -1
let max_ped = Array()
let S0 = 1900
let history_count = 0
let checks = [0,0,0,0,0,0,0,0] 
let Plt = 5
let Prt = 5
let G = Array(0,0,0,0)
let fbb = Array(0,0,0,0)
let fp = Array(0,0,0,0)
let ped_intens = Array(0,0,0,0)
let Sp = 1.2 // скорость пешехода

function addContent(e){
    e.preventDefault()
    if (document.getElementById('tram_phase_check').checked == false)
        enterTramValues()
    document.getElementById("visi").style.display = 'block'
    if (!number) number = document.getElementById('number_of_phases').value
    phase = Array()
    for (let i=0;i<number;i++){
        phase.push(Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0))
    }
    let phases = document.getElementById('phasis')
    phases.innerHTML = ''
    for (let i=0;i<number;i++){
        index = i + 1
        block = '\
            <div class="phas">\
            <h3 class="phase_title">Фаза '+index+'</h3>\
            <div id="common">\
                <div id="left" name="20" class="phase'+index+'_arrow zebra"><img src="static/zebra_vert.png" alt="" name="20" class="phase'+index+'_arrow"></div>\
                <div id="middle">\
                    <div id="up" name="17" class="phase'+index+'_arrow zebra"><img src="static/zebra_hor.png" alt="" name="17" class="phase'+index+'_arrow"></div>\
                    <div id="center">\
                        <div>\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/north_east.png"  alt="" name="1"  class="phase'+index+'_arrow phas_img">\
                            <img src="static/north_south.png" alt="" name="2"  class="phase'+index+'_arrow phas_img">\
                            <img src="static/north_west.png"  alt="" name="3"  class="phase'+index+'_arrow phas_img">\
                            <img src="static/razvorot.png"  alt="" name="4"  class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                        </div>\
                        <div>\
                            <img src="static/razvorot.png" alt="" name="16" class="phase'+index+'_arrow rotate_north phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/west_north.png" alt="" name="5" class="phase'+index+'_arrow phas_img">\
                        </div>\
                        <div>\
                            <img src="static/east_north.png" alt="" name="15" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/west_east.png" alt="" name="6" class="phase'+index+'_arrow phas_img">\
                        </div>\
                        <div>\
                            <img src="static/east_west.png" alt="" name="14" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/west_south.png" alt="" name="7" class="phase'+index+'_arrow phas_img">\
                        </div>\
                        <div>\
                            <img src="static/east_south.png" alt="" name="13" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/razvorot.png" alt="" name="8" class="phase'+index+'_arrow rotate_south phas_img">\
                        </div>\
                        <div>\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                            <img src="static/razvorot.png" alt="" name="12" class="phase'+index+'_arrow rotate_east phas_img">\
                            <img src="static/south_east.png" alt="" name="11" class="phase'+index+'_arrow phas_img">\
                            <img src="static/south_north.png" alt="" name="10" class="phase'+index+'_arrow phas_img">\
                            <img src="static/south_west.png" alt="" name="9" class="phase'+index+'_arrow phas_img">\
                            <img src="static/empty.png"  alt="" class="phase'+index+'_arrow phas_img">\
                        </div>\
                    </div>\
                    <div id="down" name="19" class="phase'+index+'_arrow zebra"><img name="19" src="static/zebra_hor.png" alt="" class="phase'+index+'_arrow"></div>\
                </div>\
                <div id="right"  name="18" class="phase'+index+'_arrow zebra"><img name="18" src="static/zebra_vert.png" alt="" class="phase'+index+'_arrow"></div>\
            </div>\
            </div>\
            '        
        phases.insertAdjacentHTML("beforeend", block)
        arrows_phase = document.querySelectorAll(".phase"+index+"_arrow")
        //console.log("i = ", i, "phase[",i,"] = ",phase[i])
        arrows_phase.forEach((arrow)=>{arrow.addEventListener("click", function(e){
            if (phase[i][e.target.attributes.name.value-1] == 0){
                e.target.style.opacity = 1 
                phase[i][e.target.attributes.name.value-1] = 1
            }
            else {
                e.target.style.opacity = 0.35
                phase[i][e.target.attributes.name.value-1] = 0
            }
        })})
        
    }
   
}

function func(e){
    e.preventDefault()
    let tp = 0 
    let Tp = 0 
    let T = 0
    let tt = 0
    let t = 0
    history_count += 1 
    console.log("ped_intens", ped_intens)

    let max_railway = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let l_max_phase = []
    let y_array = []
    let max_lines = []

    let intens = Array()
    intensities.forEach((a)=>{
        if (!isNaN(parseInt(a)) && isFinite(a))
            intens.push(parseInt(a))
        else {
            intens.push(0)
        }
    })
    let count = 0
    for (let h=0; h<phase.length;h++){
        let sum = phase[h].reduce(function(a,b){return a+b})
        if (sum==0) {
            delete phase[h]
            count+=1
        }
    }
    number -= count
    /*    Трамвай       */

    let l_train = 27.5
    let dir_indexes = [1,5,9,13]
    let m = 0

    
/*         Рaсчет числа ДКТ          */
    for (let x=0; x<4; x++){
        l[dir_indexes[m]]=intens[x+16]
        m += 1
    }
    let groups = [1,1,1,1]
    if (checks[0]==1) groups[0]+=1
    if (checks[1]==1) groups[0]+=1
    if (checks[2]==1) groups[1]+=1
    if (checks[3]==1) groups[1]+=1
    if (checks[4]==1) groups[2]+=1
    if (checks[5]==1) groups[2]+=1
    if (checks[6]==1) groups[3]+=1
    if (checks[7]==1) groups[3]+=1

    let N11 = N12 = N13 = N21 = N22 = N23 = N31 = N32 = N33 = N41 = N42 = N43 = 0 
    let sum_intenses11 = sum_intenses12 = sum_intenses13 = sum_intenses21 = sum_intenses22 = sum_intenses23 = sum_intenses31 = sum_intenses32 = sum_intenses33 = sum_intenses41 = sum_intenses42 = sum_intenses43 = 0


    let flt11 = flt12 = flt13 = flt21 = flt22 = flt23 = flt31 = flt32 = flt33 = flt41 = flt42 = flt43 = 0
    let frt11 = frt12 = frt13 = frt21 = frt22 = frt23 = frt31 = frt32 = frt33 = frt41 = frt42 = frt43 = 0
    
    if (groups[0]==1) {
        N11 = stripe[0]+stripe[1]+stripe[2]+stripe[3] // количество полос с севера
        sum_intenses11 = intens[0]+intens[1]+intens[2]+intens[3]
        flt11 = 1/(1+0.05*Plt)
        frt11 = 1-0.15*Prt
    }
    if (groups[1]==1) {
        N21 = stripe[4]+stripe[5]+stripe[6]+stripe[7] // количество полос с востока
        sum_intenses21 = intens[4]+intens[5]+intens[6]+intens[7]
        flt21 = 1/(1+0.05*Plt)
        frt21 = 1-0.15*Prt
    }
    if (groups[2]==1) {
        N31 = stripe[8]+stripe[9]+stripe[10]+stripe[11] // количество полос с юга
        sum_intenses31 = intens[8]+intens[9]+intens[10]+intens[11]
        flt31 = 1/(1+0.05*Plt)
        frt31 = 1-0.15*Prt
    }
        
    if (groups[3]==1) {
        N41 = stripe[12]+stripe[13]+stripe[14]+stripe[15] // количество полос с запада
        sum_intenses41 = intens[12]+intens[13]+intens[14]+intens[15]
        flt41 = 1/(1+0.05*Plt)
        frt41 = 1-0.15*Prt
    }

    

    // северное направление
    if (groups[0]==2 && checks[0]==1 && checks[1]==0) {
        N11 = stripe[0]
        N12 = stripe[1]+stripe[2]+stripe[3]
        if (intens[0]==0) {
            sum_intenses11 = intens[1]*Prt/100
            intens[1] -= sum_intenses11
            N11 = 1
            N12 -= 1
        }
        else {
            sum_intenses11 = intens[0]
        }
        sum_intenses12 = intens[1]+intens[2]+intens[3]
        flt11 = 1
        flt12 = 1/(1+0.05*Plt)
        frt11 = 0.85
        frt12 = 1
        
    }
    if (groups[0]==2 && checks[0]==0 && checks[1]==1) {
        N11 = stripe[0]+stripe[1]
        N12 = stripe[2]+stripe[3]
        
        if (intens[2]==0 && intens[3]==0) {
            intens[2]=intens[1]*Plt/100
            intens[1] -= intens[2]
            sum_intenses11 = intens[0]+intens[1]
            sum_intenses12 = intens[2]+intens[3]
            N12 = 1
            N11 -= 1
        }
        else {
            sum_intenses11 = intens[0]+intens[1]
            sum_intenses12 = intens[2]+intens[3]
        }
        flt11 = 1/(1+0.05*Plt)
        flt12 = 0.95
        frt11 = 1-0.15*Prt
        frt12 = 1
    }
    if (groups[0]==3) {
        N11 = stripe[0]
        N12 = stripe[1]
        N13 = stripe[2]+stripe[3]
        let r = intens[1]
        if (intens[0]==0) {
            sum_intenses11 = r*Prt/100
            intens[1] -= sum_intenses11
            N11 = 1
            N12 -= 1
        }
        else sum_intenses11 = intens[0]
        if (intens[2]==0&&intens[3]==0) {
            sum_intenses13 = r*Plt/100
            intens[1] -= sum_intenses13
            N13 = 1
            N12 -= 1
        }
        else sum_intenses13 = intens[2]+intens[3]
        
        sum_intenses12 = intens[1]
        flt11 = 1/(1+0.05*Plt)
        flt12 = 1/(1+0.05*Plt)
        flt13 = 0.95
        frt11 = 0.85
        frt12 = 1
        frt13 = 1
    }
    // восточное направление

    if (groups[1]==2 && checks[2]==1 && checks[3]==0) {
        N21 = stripe[4]
        N22 = stripe[5]+stripe[6]+stripe[7]
        if (intens[4]==0) {
            intens[4] = intens[5]*Prt/100
            intens[5] -= intens[4]
            N21 = 1
            N22 -=1
        }
        else sum_intenses21 = intens[4]
        sum_intenses22 = intens[5]+intens[6]+intens[7]
        flt21 = 1/(1+0.05*Plt)
        flt22 = 1/(1+0.05*Plt)
        frt21 = 0.85
        frt22 = 1
    }
    if (groups[1]==2 && checks[2]==0 && checks[3]==1) {
        N21 = stripe[4]+stripe[5]
        N22 = stripe[6]+stripe[7]
        if (intens[6]==0&&intens[7]==0){
            intens[6] = intens[5]*Plt/100
            intens[5] -= intens[6]
            N22 = 1
            N21 -=1
        }
        sum_intenses21 = intens[4]+intens[5]
        sum_intenses22 = intens[6]+intens[7]
        flt21 = 1
        flt22 = 0.95
        frt21 = 1-0.15*Prt
        frt22 = 1
        frt23 = 1
    }
    if (groups[1]==3) {
        N21 = stripe[4]
        N22 = stripe[5]
        N23 = stripe[6]+stripe[7]
        let r = intens[5]
        if (intens[4]==0) {
            intens[4] = intens[5]*Prt/100
            intens[5]-=intens[4]
            N21 = 1
            N22 -= 1
        }
        if (intens[6]==0&&intens[7]==0) {
            intens[6] = intens[5]*Plt/100
            intens[5]-=intens[6]
            N23=1
            N22-=1
        }
        sum_intenses21 = intens[4]
        sum_intenses22 = intens[5]
        sum_intenses23 = intens[6]+intens[7]
        flt21 = 1
        flt22 = 1
        flt23 = 0.95
        frt21 = 0.85
        frt22 = 1
        frt23 = 1
    }

    //южное направление
    if (groups[2]==2 && checks[4]==1 && checks[5]==0) {
        N31 = stripe[8]
        N32 = stripe[9]+stripe[10]+stripe[11]
        if (intens[8]==0) {
            intens[8] = intens[9]*Prt/100
            intens[9] -= intens[8]
            N31=1
            N32-=1
        }
        sum_intenses31 = intens[8]
        sum_intenses32 = intens[9]+intens[10]+intens[11]
        flt31 = 1
        flt32 = 1/(1+0.05*Plt)
        frt31 = 0.85
        frt32 = 1
    }
    if (groups[2]==2 && checks[4]==0 && checks[5]==1) {
        N31 = stripe[8]+stripe[9]
        N32 = stripe[10]+stripe[11]
        if (intens[10]==0&&intens[11]==0) {
            intens[10] = intens[9]*Plt/100
            intens[9] -= intens[10]
            N32=1
            N31-=1
        }
        sum_intenses31 = intens[8]+intens[9]
        sum_intenses32 = intens[10]+intens[11]
        flt31 = 1
        flt32 = 0.95
        frt31 = 1-0.15*Prt
        frt32 = 1
    }
    if (groups[2]==3) {
        N31 = stripe[8]
        N32 = stripe[9]
        N33 = stripe[10]+stripe[11]
        let r = intens[9]
        if (intens[8]==0) {
            intens[8] = intens[9]*Prt/100
            intens[9] -= intens[8]
            N31=1
            N32-=1
        }
        if (intens[10]==0&&intens[11]==0){
            intens[10] = r*Plt/100
            intens[9] -= intens[10]
            N33=1
            N32-=1
        }
        sum_intenses31 = intens[8]
        sum_intenses32 = intens[9]
        sum_intenses33 = intens[10]+intens[11]
        flt31 = 1
        flt32 = 1
        flt33 = 0.95
        frt31 = 0.85
        frt32 = 1
        frt33 = 1
    }

    //западное направление
    if (groups[3]==2 && checks[6]==1 && checks[7]==0) {
        N41 = stripe[12]
        N42 = stripe[13]+stripe[14]+stripe[15]
        if (intens[12]==0) {
            intens[12] = intens[13]*Prt/100
            intens[13] -= intens[12]
            N41=1
            N42-=1
        }
        sum_intenses41 = intens[12]
        sum_intenses42 = intens[13]+intens[14]+intens[15]
        flt41 = 1
        flt42 = 1/(1+0.05*Plt)
        frt41 = 0.85
        frt42 = 1
    }
    if (groups[3]==2 && checks[6]==0 && checks[7]==1) {
        N41 = stripe[12]+stripe[13]
        N42 = stripe[14]+stripe[15]
        if (intens[14]==0&&intens[15]==0) {
            intens[14] = intens[13]*Plt/100
            intens[13] -= intens[14]
            N42=1
            N41-=1
        }
        sum_intenses41 = intens[12]+intens[13]
        sum_intenses42 = intens[14]+intens[15]
        flt41 = 1
        flt42 = 1/(1+0.05*Plt)
        frt41 = 1-0.15*Prt
        frt42 = 1
    }
    if (groups[3]==3) {
        N41 = stripe[12]
        N42 = stripe[13]
        N43 = stripe[14]+stripe[15]
        let r = intens[13]
        if (intens[12]==0) {
            intens[12] = intens[13]*Prt/100
            intens[13] -= intens[12]
            N41=1
            N42-=1
        }
        if (intens[14]==0&&intens[15]==0) {
            intens[14] = r*Plt/100
            intens[13] -= intens[14]
            N43=1
            N42-=1
        }
        sum_intenses41 = intens[12]
        sum_intenses42 = intens[13]
        sum_intenses43 = intens[14]+intens[15]
        flt41 = 1
        flt42 = 1
        flt43 = 0.95
        frt41 = 0.85
        frt42 = 1
        frt43 = 1
    }

    if (N11==0 & N12==0 & N13==0) {
        N11 = N31
        N12 = N32
        N13 = N31
    }
    if (N21==0 & N22==0 & N23==0) {
        N21 = N41
        N22 = N42
        N23 = N41
    }
    if (N31==0 & N32==0 & N33==0) {
        N31 = N11
        N32 = N12
        N33 = N11
    }
    if (N41==0 & N42==0 & N43==0) {
        N41 = N21
        N42 = N22
        N43 = N21
    }
    let fw = 1+(road_size-3.6)/9

    let S11 = S0*N11*fw*flt11*frt11 //*(1-G[0]/200)*((N11-14.4*fbb[0]/3600)/N11)*((N11-0.1-18*fp[0]/3600)/N11)
    let S12 = S0*N12*fw*flt12*frt12 //*(1-G[0]/200)
    let S13 = S0*N13*fw*flt13*frt13 //*(1-G[0]/200)

    let S21 = S0*N21*fw*flt21*frt21 //*(1-G[1]/200)*((N21-14.4*fbb[1]/3600)/N21)*((N21-0.1-18*fp[1]/3600)/N21)
    let S22 = S0*N22*fw*flt22*frt22 //*(1-G[1]/200)
    let S23 = S0*N23*fw*flt23*frt23 //*(1-G[1]/200)

    let S31 = S0*N31*fw*flt31*frt31 //*(1-G[2]/200)*((N31-14.4*fbb[2]/3600)/N31)*((N31-0.1-18*fp[2]/3600)/N31)
    let S32 = S0*N32*fw*flt32*frt32 //*(1-G[2]/200)
    let S33 = S0*N33*fw*flt33*frt33 //*(1-G[2]/200)

    let S41 = S0*N41*fw*flt41*frt41 //*(1-G[3]/200)*((N41-14.4*fbb[3]/3600)/N31)*((N31-0.1-18*fp[3]/3600)/N31)
    let S42 = S0*N42*fw*flt42*frt42 //*(1-G[3]/200)
    let S43 = S0*N43*fw*flt43*frt43 //*(1-G[3]/200)

    console.log('N11: ', N11)
    console.log('sum_intenses11: ', sum_intenses11)
    console.log('flt11: ', flt11)
    console.log('frt11: ', frt11)
    console.log('S11: ', S11)
    console.log('N12: ', N12)
    console.log('sum_intenses12: ', sum_intenses12)
    console.log('flt12: ', flt12)
    console.log('frt12: ', frt12)
    console.log('S12: ', S12)
    console.log('N13: ', N13)
    console.log('sum_intenses13: ', sum_intenses13)
    console.log('flt13: ', flt13)
    console.log('frt13: ', frt13)
    console.log('S13: ', S13)
    console.log('N14: ', N14)
    console.log('sum_intenses14: ', sum_intenses14)
    console.log('flt14: ', flt14)
    console.log('frt14: ', frt14)
    console.log('S14: ', S14)

    console.log('N21: ', N21)
    console.log('sum_intenses21: ', sum_intenses21)
    console.log('flt21: ', flt21)
    console.log('frt21: ', frt21)
    console.log('S21: ', S21)
    console.log('N22: ', N22)
    console.log('sum_intenses22: ', sum_intenses22)
    console.log('flt22: ', flt22)
    console.log('frt22: ', frt22)
    console.log('S22: ', S22)
    console.log('N23: ', N23)
    console.log('sum_intenses23: ', sum_intenses23)
    console.log('flt23: ', flt23)
    console.log('frt23: ', frt23)
    console.log('S23: ', S23)
    console.log('N24: ', N24)
    console.log('sum_intenses24: ', sum_intenses24)
    console.log('flt24: ', flt24)
    console.log('frt24: ', frt24)
    console.log('S24: ', S24)


    console.log('N31: ', N31)
    console.log('sum_intenses31: ', sum_intenses31)
    console.log('flt31: ', flt31)
    console.log('frt31: ', frt31)
    console.log('S31: ', S31)
    console.log('N32: ', N32)
    console.log('sum_intenses32: ', sum_intenses32)
    console.log('flt32: ', flt32)
    console.log('frt32: ', frt32)
    console.log('S32: ', S32)
    console.log('N33: ', N33)
    console.log('sum_intenses33: ', sum_intenses33)
    console.log('flt33: ', flt33)
    console.log('frt33: ', frt33)
    console.log('S33: ', S33)
    console.log('N34: ', N34)
    console.log('sum_intenses34: ', sum_intenses34)
    console.log('flt34: ', flt34)
    console.log('frt34: ', frt34)
    console.log('S34: ', S34)


    console.log('N41: ', N41)
    console.log('sum_intenses41: ', sum_intenses41)
    console.log('flt41: ', flt41)
    console.log('frt41: ', frt41)
    console.log('S41: ', S41)
    console.log('N42: ', N42)
    console.log('sum_intenses42: ', sum_intenses42)
    console.log('flt42: ', flt42)
    console.log('frt42: ', frt42)
    console.log('S42: ', S42)
    console.log('N43: ', N43)
    console.log('sum_intenses43: ', sum_intenses43)
    console.log('flt43: ', flt43)
    console.log('frt43: ', frt43)
    console.log('S43: ', S43)
    console.log('N44: ', N44)
    console.log('sum_intenses44: ', sum_intenses44)
    console.log('flt44: ', flt44)
    console.log('frt44: ', frt44)
    console.log('S44: ', S44)
    console.log('fw: ', fw)

    //console.log("S:", S11,S12,S13,S21,S22,S23,S31,S32,S33,S41,S42,S43)
    //console.log("Sum_intenses:", sum_intenses11, sum_intenses12, sum_intenses13,sum_intenses21, sum_intenses22, sum_intenses23, sum_intenses31, sum_intenses32, sum_intenses33,sum_intenses41, sum_intenses42, sum_intenses43)
    
    let lmaxx = Array()
    for (let i=0;i<number;i++){
        let y11 = y12 = y13 = y21 = y22 = y23 = y31 = y32 = y33 = y41 = y42 = y43 = 0
        if (phase[i][0]==1 || phase[i][1]==1 || phase[i][2]==1 || phase[i][3]==1){
            if (S11!=0)
                y11 = (sum_intenses11)/S11
            else y11 = 0
            if (S12!=0) 
                y12 = (sum_intenses12)/S12
            else y12 = 0
            if (S13!=0) 
                y13 = (sum_intenses13)/S13
            else y13 = 0 
        }
        if (phase[i][4]==1 || phase[i][5]==1 || phase[i][6]==1 || phase[i][7]==1){
            if (S21!=0) 
                y21 = (sum_intenses21)/S21
            else y21 = 0
            if (S22!=0) 
                y22 = (sum_intenses22)/S22
            else y22 = 0
            if (S23!=0) 
                y23 = (sum_intenses23)/S23
            else y23 = 0
        }
        if (phase[i][8]==1 || phase[i][9]==1 || phase[i][10]==1 || phase[i][11]==1){
            if (S31!=0) 
                y31 = (sum_intenses31)/S31
            else y31 = 0
            if (S32!=0) 
                y32 = (sum_intenses32)/S32
            else y32 = 0
            if (S33!=0) 
                y33 = (sum_intenses33)/S33
            else y33 = 0
        }
        if (phase[i][12]==1 || phase[i][13]==1 || phase[i][14]==1 || phase[i][15]==1){
            if (S41!=0 && !isNaN(S41)) 
                y41 = sum_intenses41/S41
            else y41 = 0
            if (S42!=0 && !isNaN(S42)) 
                y42 = (sum_intenses42)/S42
            else y42 = 0
            if (S43!=0 && !isNaN(S43))
                y43 = (sum_intenses43)/S43
            else y43 = 0
        }
        y_array[i] = [y11,y12,y13,y21,y22,y23,y31,y32,y33,y41,y42,y43].reduce((a,b)=>(a>=b&&!isNaN(a))?a:b)
        console.log('y_array: ', y_array)
        let l_temp = Array([0])
        // движение с севера заканчивается в фазе
        if (phase[(i+1)%number][5]==1){
            l_temp.push((N31+N32+N33)*road_size+d+g+(N11+N12+N13)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][6]==1 || phase[(i+1)%number][7]==1){
            l_temp.push(d+g+(N31+N32+N33)*road_size+road_size/2+Math.sqrt(((N11+N12+N13)*road_size-road_size/2))**2+(1.5*road_size)**2)
        }
        if (phase[(i+1)%number][8]==1 && phase[i][2]==1){
            l_temp.push(Math.sqrt((d+g)**2+(d+g)**2))
        }
        if (phase[(i+1)%number][9]==1 && phase[i][2]==1){
            l_temp.push(d+g+road_size/2)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][2]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size-road_size/2+road_size/2)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][1]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size+(N11+N12+N13)*road_size)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][0]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size+(N11+N12+N13)*road_size+road_size/2+d+g)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][0]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size+(N11+N12+N13)*road_size+road_size/2+d+g)
        }
        if (phase[(i+1)%number][12]==1 && phase[i][1]==1){
            l_temp.push(d+g+d+g)
        }
        if (phase[(i+1)%number][13]==1 && phase[i][1]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][13]==1 && phase[i][2]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size+(N31+N32+N33)*road_size-road_size*1.5)
        }
        if (phase[(i+1)%number][14]==1 && phase[i][1]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][14]==1 && phase[i][2]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size-road_size/2)
        }
        // движение с востока оканчивается в фазе
        if (phase[(i+1)%number][0]==1 && phase[i][5]==1){
            l_temp.push(d+g+d+g)
        }
        if (phase[(i+1)%number][1]==1 && phase[i][6]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][1]==1 && phase[i][7]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size-road_size/2+road_size)
        }
        if (phase[(i+1)%number][2]==1 && phase[i][6]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size-road_size/2)
        }

        if (phase[(i+1)%number][9]==1 && phase[i][4]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size+g/2)
        }
        if (phase[(i+1)%number][9]==1 && phase[i][5]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size+road_size/2)
        }
        if (phase[(i+1)%number][9]==1 && phase[i][6]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+road_size/2)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][5]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size+(N11+N12+N13)*road_size)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][6]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+road_size/2)
        }

        if (phase[(i+1)%number][12]==1 && phase[i][6]==1){
            l_temp.push(d+g+d+g)
        }
        if (phase[(i+1)%number][14]==1 && phase[i][4]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size+(N31+N32+N33)*road_size-road_size/2+(N21+N22+N23)*road_size+d/2)
        }
        if (phase[(i+1)%number][14]==1 && phase[i][5]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size+(N31+N32+N33)*road_size-road_size/2+(N21+N22+N23)*road_size-road_size/2)
        }
        // движение с юга оканчивается в фазе
        if (phase[(i+1)%number][0]==1 && phase[i][10]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size-road_size/2+(N11+N12+N13)*road_size+d/2)
        }
        if (phase[(i+1)%number][1]==1 && phase[i][10]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size-road_size/2+(N11+N12+N13)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][2]==1 && phase[i][8]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size+(N41+N42+N43)*road_size-road_size/2+(N31+N32+N33)*road_size+d/2)
        }
        if (phase[(i+1)%number][2]==1 && phase[i][9]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size+(N41+N42+N43)*road_size-road_size/2+(N31+N32+N33)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][4]==1 && phase[i][9]==1){
            l_temp.push(d+g+d+g)
        }
        if (phase[(i+1)%number][5]==1 && phase[i][9]==1){
            l_temp.push(d+g+(N31+N32+N33)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][5]==1 && phase[i][10]==1){
            l_temp.push(d+g+(N31+N32+N33)*road_size+(N11+N12+N13)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][6]==1 && phase[i][10]==1){
            l_temp.push(d+g+(N31+N32+N33)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][13]==1 && phase[i][8]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size+(N31+N32+N33)*road_size+d/2)
        }
        if (phase[(i+1)%number][13]==1 && phase[i][9]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size+(N31+N32+N33)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][14]==1 && phase[i][9]==1){
            l_temp.push(d+g+(N11+N12+N13)*road_size+(N31+N32+N33)*road_size+(N21+N22+N23)*road_size-1.5*road_size)
        }
        if (phase[(i+1)%number][13]==1 && phase[i][10]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size-road_size/2)
        }
        // движение с запада оканчивается в фазе
        if (phase[(i+1)%number][1]==1 && phase[i][12]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size+(N41+N42+N43)*road_size+d/2)
        }
        if (phase[(i+1)%number][1]==1 && phase[i][13]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size+(N41+N42+N43)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][1]==1 && phase[i][14]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size+road_size/2)
        }
        if (phase[(i+1)%number][2]==1 && phase[i][13]==1){
            l_temp.push(d+g+(N21+N22+N23)*road_size+(N41+N42+N43)*road_size+(N31+N32+N33)*road_size-1.5*road_size)
        }
        if (phase[(i+1)%number][6]==1 && phase[i][12]==1){
            l_temp.push(d+g+(N31+N32+N33)*road_size+(N41+N42+N43)*road_size+d/2)
        }
        if (phase[(i+1)%number][6]==1 && phase[i][13]==1){
            l_temp.push(d+g+(N31+N32+N33)*road_size+(N41+N42+N43)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][8]==1 && phase[i][12]==1){
            l_temp.push(d+g+d+g)
        }
        if (phase[(i+1)%number][9]==1 && phase[i][13]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][10]==1 && phase[i][13]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size-road_size/2)
        }
        if (phase[(i+1)%number][9]==1 && phase[i][13]==1){
            l_temp.push(d+g+(N41+N42+N43)*road_size+(N21+N22+N23)*road_size-road_size/2)
        }
        if (l_temp.length==1) {
            //lmaxx.push([N11+N12+N13,N21+N22+N23,N31+N32+N33,N41+N42+N43].reduce((a,b)=>a>b?a*road_size:b*road_size))
            lmaxx.push(0)
        }
        else lmaxx.push(l_temp.reduce((a,b)=>a>b?a:b))
    }
    console.log("l_array", lmaxx)

    /*          Расчет времени трамвая      */
    /* Движение трамваев прямо */
    if (train_routes[1]==1 | single_train_routes[1]==1) 
        max_railway[1]=3.6*(intens[17]+l_train)/v_train
    if (train_routes[9]==1 | single_train_routes[9]==1) 
        max_railway[9]=3.6*(intens[17]+l_train)/v_train
    if (train_routes[5]==1 | single_train_routes[5]==1) 
        max_railway[5]=3.6*(intens[16]+l_train)/v_train
    if (train_routes[13]==1 | single_train_routes[13]==1) 
        max_railway[13]=3.6*(intens[16]+l_train)/v_train

    /* Повороты трамваев */
    for (let i=0;i<16;i++){
        if (max_railway[i]==0){
            if ((i==2 || i==10) & (train_routes[i]==1 | single_train_routes[i]==1))
                max_railway[i] = 3.6*(intens[16]/2+intens[17]+l_train)/v_train
            if ((i==6 || i==14) & (train_routes[i]==1 | single_train_routes[i]==1))
                max_railway[i] = 3.6*(intens[17]/2+intens[16]+l_train)/v_train
            if ((i==4 || i == 12) & (train_routes[i]==1 | single_train_routes[i]==1))
                max_railway[i] = 3.6*(intens[16]/2+intens[17]+l_train)/v_train
            if ((i==0 || i==8 ) & (train_routes[i]==1 | single_train_routes[i]==1))
                max_railway[i] = 3.6*(intens[17]/2+intens[16]+l_train)/v_train
        }
    }

    //console.log("max_railway",max_railway)
    let max_train_time = Array()
    for (let y=0;y<number;y++){
        let maximum_train_time = 0
        for (let t=0;t<16;t++){
            if (train_routes[y][t]==1){
                if (max_railway[t]>maximum_train_time)
                    maximum_train_time = max_railway[t]
            }
        }
        max_train_time.push(maximum_train_time)
    }        
/*        Расчет фазовых коэффициентов    */ 

    let max_len = Array()
    for (let f=0;f<number;f++){
        if (phase[f][0]==0&&phase[f][1]==0&&phase[f][2]==0&&phase[f][3]==0&&phase[f][4]==0&&phase[f][5]==0&&phase[f][6]==0&&phase[f][7]==0&&phase[f][8]==0&&phase[f][9]==0&&phase[f][10]==0&&phase[f][11]==0&&phase[f][12]==0&&phase[f][13]==0&&phase[f][14]==0&&phase[f][15]==0)
        ped_phase = f
        let tmp = Array([0,0,0,0])
        if (phase[f][16]==1) tmp[0] = intens[16]
        if (phase[f][17]==1) tmp[1] = intens[17]
        if (phase[f][18]==1) tmp[2] = intens[18]
        if (phase[f][19]==1) tmp[3] = intens[19]
        max_len.push(tmp.reduce((a,b)=>a>=b?a:b))
    }
        
    //console.log("phase", y_array)
    for (let i=0;i<number;i++){
        let max_l = -1
        for (let j=0;j<16;j++)
            if (phase[i][j] == 1)
                if (l[j]>max_l)
                    max_l = l[j] 
        if (max_l>=max_ped[i] && max_l!=-1) 
            l_max_phase.push(max_l)
        else 
            l_max_phase.push(max_ped[i])
    }
    
    let t_yellow_light = 3
    t_yellow_light = promtact_yellow
    console.log('promtact_yellow: ', promtact_yellow)
    let red_light = 3
    red_light = promtact_red
    console.log('promtact_red: ', promtact_red)
    let green_tick_light = 3
    let summa = 0
    let a = 4
    let v = 25
    

    //for (let k=0;k<lmaxx.length;k++){
    //    let lk = (v/(7.2*a))+(3.6*(lmaxx[k]+6+5)/v)
    //    Tp +=lk
    //}
    if (ped_phase!=-1) Tp = (number-1)*(t_yellow_light+green_tick_light)+green_tick_light+red_light
    else Tp = number*(t_yellow_light+green_tick_light)+red_light

    console.log('Tp: ', Tp)

    let max_ped_int = Array()
    for (let i=0;i<number;i++){
        max_ped_int.push(0)
        let temp_int = Array([0,0,0,0])
        if (phase[i][16]==1) temp_int[0] = ped_intens[0]
        if (phase[i][17]==1) temp_int[1] = ped_intens[1]
        if (phase[i][18]==1) temp_int[2] = ped_intens[2]
        if (phase[i][19]==1) temp_int[3] = ped_intens[3]
        max_ped_int[i] = temp_int.reduce((a,b)=>a>b?a:b)
    }
    console.log("FOR_NIKITA_y_array:", y_array)
    // считаем Y по методике
    for (let i=0;i<number;i++)
        if (y_array[i]>0)
            summa += y_array[i] 
    
    let k=0
    tt = t_yellow_light*number
    let Tmin = Tp/(1-summa)
    console.log('Tmin: ', Tmin)
    let Topt = (1.5*Tp+5)/(1-summa)
    console.log('Topt: ', Topt)
    
    //while (Topt<120) Topt+=Tmin
    let summa_zel = Topt - tt
    T_new = 0
    let res = document.getElementById("pofaz")
    res.innerHTML = ''
    let history = document.getElementById("history")
    if (tram_phase == 1) {
        let max_rw = 0
        for (let i=0;i<16;i++){
            if (single_train_routes[i]==1){
                if (max_rw < max_railway[i]){
                    max_rw = max_railway[i]
                }
            }
        }
        let b = '<div class="row" style="position:relative;">\
                    <div class="col">\
                        <div class="row">\
                            <h3>Время трамвайной фазы</h3>\
                            <output id="interval'+k+'">'+Math.ceil(max_rw+3)+' сек.</output>\
                        </div>'
        let block = "<div class='row height margin'>\
                        <img src='static/fon.png' alt=''>"
        b+=block
        for (let u=0;u<16;u++){
            if (single_train_routes[u]==1) {
                let image = "<img src='static/"+u+"_train.png' alt=''>"
                b+=image
            }
        }
        b+="</div>"
        res.insertAdjacentHTML("beforeend", b)
        res.insertAdjacentHTML("beforeend", "</div></div></div>")
        
    }
    
    let times = Array()
    //console.log("coefs", coefs)
    //console.log("coef_itog", coef_itog)
    if (ped_phase!=-1){
        for (let i=0;i<number; i++){
            let k=i+1
            if (i!=ped_phase){
                t = y_array[i]/summa*summa_zel
                
                if (d<=3){
                    tp = 3.2+max_len[i]/Sp+(0.27*(max_ped_int[i]*Topt/3600))
                }
                else {
                    tp = 3.2+max_len[i]/Sp+(0.81*(max_ped_int[i]*Topt/3600/d))
                }
                if (tp>t) t=tp
                times.push(t)
                let b = '<div class="row" style="position:relative;">\
                    <div class="col">\
                        <div class="row">\
                            <h3>Время фазы '+k+'</h3>\
                            <output id="interval'+k+'">'+Math.ceil(Math.abs(t))+' сек.</output>\
                        </div>'
                let block = "<div class='row height margin'>\
                        <img src='static/fon.png' alt=''>"
                b+=block
                for (let u=0;u<20;u++){
                    if (phase[i][u]==1) {
                        let image = "<img src='static/"+u+".png' alt=''>"
                        if (u==0) image += "<p class='number vertical' style='left:20%;top:25%'>"+intens[u]+"</p>"
                        if (u==1) image += "<p class='number vertical' style='left:27%; top:25%'>"+intens[u]+"</p>"
                        if (u==2) image += "<p class='number vertical' style='left:35%; top:25%'>"+intens[u]+"</p>"
                        if (u==3) image += "<p class='number vertical' style='left:58%;top:25%'>"+intens[u]+"</p>"

                        if (u==4) image += "<p class='number' style='right:25%;top:41%;'>"+intens[u]+"</p>"
                        if (u==5) image += "<p class='number' style='right:25%; top:47%;'>"+intens[u]+"</p>"
                        if (u==6) image += "<p class='number' style='right:25%; top:54%'>"+intens[u]+"</p>"
                        if (u==7) image += "<p class='number' style='rigth:10%; top:65%;'>"+intens[u]+"</p>"

                        if (u==8) image += "<p class='number vertical' style='right:30%; bottom:17%'>"+intens[u]+"</p>"
                        if (u==9) image += "<p class='number vertical' style='right:37%; bottom:17%'>"+intens[u]+"</p>"
                        if (u==10) image += "<p class='number vertical' style='right:44%; bottom:17%'>"+intens[u]+"</p>"
                        if (u==11) image += "<p class='number vertical' style='right:50%; bottom:24%'>"+intens[u]+"</p>"

                        if (u==12) image += "<p class='number' style='left:14%; top: 72%;'>"+intens[u]+"</p>"
                        if (u==13) image += "<p class='number' style='left:14%; top: 66%;'>"+intens[u]+"</p>"
                        if (u==14) image += "<p class='number vertical' style='left:48%; top: 24%;'>"+intens[u]+"</p>"
                        if (u==15) image += "<p class='number' style='left:14%; top: 52%;'>"+intens[u]+"</p>"
                        b+=image
                    }
                }
                b+="</div>"
                res.insertAdjacentHTML("beforeend", b)
                res.insertAdjacentHTML("beforeend", "</div></div></div>")
            }
            else {
                /*if (d<=3){
                    tp = 3.2+max_len[i]/Sp+(0.27*(max_ped_int[i]*Topt/3600))
                }
                else {
                    tp = 3.2+max_len[i]/Sp+(0.81*(max_ped_int[i]*Topt/3600/d))
                }*/
                console.log("max_len", max_len)
                tp = max_len[i]/1.3 + 5
                times.push(tp)
                let b = '<div class="row" style="position:relative;">\
                    <div class="col">\
                        <div class="row">\
                            <h3>Время пешеходной фазы</h3>\
                            <output id="interval'+k+'">'+Math.ceil(tp)+' сек.</output>\
                        </div>'
                let block = "<div class='row height margin'>\
                                <img src='static/fon.png' alt=''>"
                b+=block
                for (let u=16;u<20;u++){
                    if (phase[i][u]==1) {
                        let image = "<img src='static/"+u+".png' alt=''>"
                        
                        b+=image
                    }
                }
                b+="</div>"
                res.insertAdjacentHTML("beforeend", b)
                res.insertAdjacentHTML("beforeend", "</div></div></div>")
            }
        }
    }
    else {
        for (let i=0;i<number;i++){
            let k=i+1
            t = y_array[i]/summa*summa_zel
            if (d<=3){
                tp = 3.2+max_len[i]/Sp+(0.27*(max_ped_int[i]*Topt/3600))
            }
            else {
                tp = 3.2+max_len[i]/Sp+(0.81*(max_ped_int[i]*Topt/3600/d))
            }
            if (tp>t) t=tp
            times.push(t)
            if (i!=ped_phase){

                let b = '<div class="row" style="position:relative;">\
                        <div class="col">\
                            <div class="row">\
                                <h3>Время фазы '+k+'</h3>\
                                <output id="interval'+k+'">'+Math.ceil(Math.abs(t))+' сек.</output>\
                            </div>'
                let block = "<div class='row height margin relative'>\
                                <img src='static/fon.png' alt=''>"
                b+=block
                for (let u=0;u<16;u++){
                    if (phase[i][u]==1) {
                        let image = "<img src='static/"+u+".png' alt=''>"
                        if (u==0) image += "<p class='number vertical' style='left:23.5%;top:11.429%'>"+intens[u]+"</p>"
                        if (u==1) image += "<p class='number vertical' style='left:33%; top:11.429%'>"+intens[u]+"</p>"
                        if (u==2) image += "<p class='number vertical' style='left:41%; top:11.429%'>"+intens[u]+"</p>"
                        if (u==3) image += "<p class='number vertical' style='left:70%;top:16%'>"+intens[u]+"</p>"

                        if (u==4) image += "<p class='number' style='right:19%;top:31%;'>"+intens[u]+"</p>"
                        if (u==5) image += "<p class='number' style='right:19%; top:38%;'>"+intens[u]+"</p>"
                        if (u==6) image += "<p class='number' style='right:19%; top:45%'>"+intens[u]+"</p>"
                        if (u==7) image += "<p class='number' style='rigth:21%; top:57%;'>"+intens[u]+"</p>"

                        if (u==8) image += "<p class='number vertical' style='right:27%; bottom:20%'>"+intens[u]+"</p>"
                        if (u==9) image += "<p class='number vertical' style='right:34%; bottom:20%'>"+intens[u]+"</p>"
                        if (u==10) image += "<p class='number vertical' style='right:41%;bottom:20%'>"+intens[u]+"</p>"
                        if (u==11) image += "<p class='number vertical' style='right:59%; bottom:27%'>"+intens[u]+"</p>"

                        if (u==12) image += "<p class='number' style='left:14%; top: 67%;'>"+intens[u]+"</p>"
                        if (u==13) image += "<p class='number' style='left:14%; top: 60%;'>"+intens[u]+"</p>"
                        if (u==14) image += "<p class='number' style='left:14%; top: 53%;'>"+intens[u]+"</p>"
                        if (u==15) image += "<p class='number' style='left:49.5%; top: 30%;'>"+intens[u]+"</p>"
                        
                        b+=image
                    }
                }
                b+="</div>"
                res.insertAdjacentHTML("beforeend", b)
                res.insertAdjacentHTML("beforeend", "</div></div></div>")
            }
            else {
                times.push(tp)
                let b = '<div class="row" style="position:relative;">\
                    <div class="col">\
                        <div class="row">\
                            <h3>Время пешеходной фазы</h3>\
                            <output id="interval'+k+'">'+Math.ceil(tp)+' сек.</output>\
                        </div>'
                let block = "<div class='row height margin'>\
                                <img src='static/fon.png' alt=''>"
                b+=block
                for (let u=16;u<20;u++){
                    if (phase[i][u]==1) {
                        let image = "<img src='static/"+u+".png' alt=''>"
                        b+=image
                    }
                }
                b+="</div>"
                res.insertAdjacentHTML("beforeend", b)
                res.insertAdjacentHTML("beforeend", "</div></div></div>")
            }
        }
    }
    //console.log("tp", tp)
    //form_all.reset()
    // заполняем пофазник таблица
    let final_table = "<table class='pofaz_table'><thead><tr>\
                            <th scope='col'>№</th>\
                            <th scope='col'>Группа сигналов</th>\
                            <th scope='col'>Последовательность сигналов</th>\
                            <th scope='col'>Красн (красный) (конец)</th>\
                            <th scope='col'>зеленый (зеленый) (конец)</th>\
                            <th scope='col'>Красн (красный) (конец) 2</th>\
                            <th scope='col'>зеленый (зеленый) (конец) 2</th>\
                            <th scope='col'>Красный/желтый (красный) (фикисрованный интервал времени)</th>\
                            <th scope='col'>желтый (красный) (фикисрованный интервал времени)</th>\
                            <th scope='col'>Мигающий красный (красный) (фикисрованный интервал времени)</th>\
                            <th scope='col'>AllRed (красный) (фикисрованный интервал времени)</th>\
                            <th scope='col'>мигающий зеленый (зеленый) (фикисрованный интервал времени)</th>\
                            </tr></thead>"
    
    let vals = Array(['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''],
                    ['','','','','','','','','','','',''],['','','','','','','','','','','',''])
    let val_flags = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let full_time = 0
    for (let u=0;u<number;u++){
        let prom_time = Array()
        if (times[u]<0) {
            times[u] = Math.abs(Math.floor(times[u]))
        }
        else {
            times[u] = Math.ceil(times[u])
        }
        for (let r=0;r<20;r++){  
            if (intensities[r]!=0) {      
                //console.log("vals[u]",vals[u])
                if (phase[u][r]==1){
                    val_flags[r]=1
                    vals[r][0] = String(r+1)
                    if (phase[u][1]==1||phase[u][5]==1||phase[u][9]==1||phase[u][13]==1) {
                        vals[r][1] = "Транспортное"
                        vals[r][2] = "Красный-красный/желтый-зеленый-мигающий зеленый-желтый"
                        vals[r][8] = "3"
                        vals[r][11] = "3"
                        prom_time.push(6)
                    }
                    if (r==16||r==17||r==18||r==19) {
                        vals[r][1] = "Пешеходное"
                        vals[r][2] = "Красный-зеленый-мигающий зеленый"
                        vals[r][11] = "3"
                        prom_time.push(3)
                    }
                    if ((r==4||r==6||r==7)&&phase[u][5]==0) {
                        vals[r][1] = "Поворотное"
                        vals[r][2] = "Красный-зеленый-мигающий зеленый"
                        vals[r][11] = "3"
                        prom_time.push(3)
                    }
                    if ((r==0||r==2||r==3) && phase[u][1]==0) {
                        vals[r][1] = "Поворотное"
                        vals[r][2] = "Красный-зеленый-мигающий зеленый"
                        vals[r][11] = "3"
                        prom_time.push(3)
                    }
                    if ((r==8||r==10||r==11) && phase[u][9]==0) {
                        vals[r][1] = "Поворотное"
                        vals[r][2] = "Красный-зеленый-мигающий зеленый"
                        vals[r][11] = "3"
                        prom_time.push(3)
                    }
                    if ((r==12||r==14||r==15) && phase[u][13]==0) {
                        vals[r][1] = "Поворотное"
                        vals[r][2] = "Красный-зеленый-мигающий зеленый"
                        vals[r][11] = "3"
                        prom_time.push(3)
                    }
                    if (u==0) {
                        vals[r][3] = "0"
                        vals[r][4] = String(times[u])
                    }
                    if (u>0) {
                        vals[r][3] = String(full_time)
                        vals[r][4] = String(times[u]+full_time)
                    }
                }
            }
        }
        full_time += Math.abs(Math.ceil(times[u]))
        full_time += prom_time.reduce((a,b)=>a>b?a:b)
    }


    //console.log("values", vals)
    let temp_table = "<tbody>"
    
    for (let t=0;t<vals.length;t++){
        if (val_flags[t]==1){
            temp_table += "<tr><th scope='row'>"+vals[t][0]+"</th>"
            temp_table += "<td>"+vals[t][1]+"</td>"
            temp_table += "<td>"+vals[t][2]+"</td>"
            temp_table += "<td>"+vals[t][3]+"</td>"
            temp_table += "<td>"+vals[t][4]+"</td>"
            temp_table += "<td></td><td></td><td></td>"
            temp_table += "<td>"+vals[t][8]+"</td>"
            temp_table += "<td></td><td></td>"
            temp_table += "<td>"+vals[t][11]+"</td>"
            temp_table += "</tr>"
        }
    }
    vals = vals.filter((value1)=>value1.some((value)=>value!=''))
    console.log(vals)
    temp_table += "</tbody></table><button id='save_button' class='save_button'>Сохранить результат</button>"
    final_table += temp_table
    res.insertAdjacentHTML("beforeend", final_table)
    let temp_string = ''
    for (let i=0;i<vals.length;i++){
        for (let j=0;j<vals[i].length;j++){
            if (i==0 && j==0) {
                temp_string += '1,'+vals[i][j]
            }
            else {
                if (j==0) temp_string += vals[i][j]
                else temp_string += ','+vals[i][j]
            }
        }
        temp_string +="\r\n"
    }
    let csv_content = "data:text/csv;charset=utf-8"+encodeURI(temp_string)
    let link = document.createElement("a")
    link.setAttribute("href", csv_content)
    link.setAttribute("download", "cross_"+history_count+".csv")
    
    document.getElementById("save_button").addEventListener("click", (e)=>{e.preventDefault();link.click()})

    let title = document.getElementById("title")
    let temp = "<div><div class='raschet'><h3>Расчет № "+history_count+"</h3><h3>"+title.value+"</h3></div>"
    temp+= res.innerHTML+"</div>"
    history.insertAdjacentHTML("beforeend",temp)
}

function enterValues(e) {
    let current_number = e.target.attributes.name.value-1
    if (e.target.classList.contains("roads"))
        stripe[current_number] = e.target.valueAsNumber
    if (e.target.classList.contains("intens"))
        intensities[current_number] = e.target.value
    if (e.target.attributes.name.value == 'road_width'){
        road_size = road_size_metres[e.target.value]
        road_raz = road_size_values[e.target.value]
    }
    if (e.target.attributes.name.value == 'v_train'){
        v_train = parseInt(e.target.value)
    }
    if (e.target.attributes.name.value == 'promtact_red'){
        promtact_red = parseInt(e.target.value)
    }
    if (e.target.attributes.name.value == 'promtact_yellow'){
        promtact_yellow = parseInt(e.target.value)
    }
    if (e.target.attributes.name.value == 'd'){
        d = parseInt(e.target.value)
    }
    if (e.target.attributes.name.value == 'b'){
        b = parseInt(e.target.value)
    }
    if (e.target.attributes.name.value == 'g'){
        g = parseInt(e.target.value)
    }
    if (e.target.attributes.name.value == 'w'){
        w = parseInt(e.target.value)
    }
}

function enterLinesValues(e) {
    let current_number = e.target.attributes.name.value-1
    intensities[current_number] = e.target.valueAsNumber
}

function enterTramValues(e){
    let trams = document.getElementById('trams')
    trams.innerHTML = ''
    for (let i=0;i<number;i++){
        train_routes.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
        index = i + 1
        block = '\
            <div class="phas">\
                <h3 class="tram_phase_title">Направление движения трамваев в фазе '+index+'</h3>\
                <div id="common">\
                    <div id="middle">\
                        <div id="center">\
                            <div>\
                                <img src="static/east_north.png" name="16" alt="" class="tramphase'+index+'_arrow">\
                                <img src="static/north_east.png" alt="" name="1" class="tramphase'+index+'_arrow">\
                                <img src="static/north_south.png" alt="" name="2" class="tramphase'+index+'_arrow">\
                                <img src="static/north_west.png" alt="" name="3" class="tramphase'+index+'_arrow">\
                                <img src="static/west_north.png" alt="" name="5" class="tramphase'+index+'_arrow">\
                            </div>\
                            <div>\
                                <img src="static/east_west.png" alt="" name="14" class="tramphase'+index+'_arrow">\
                                <div></div>\
                                <div></div>\
                                <div></div>\
                                <img src="static/west_east.png" alt="" name="6" class="tramphase'+index+'_arrow">\
                            </div>\
                            <div>\
                                <img src="static/east_south.png" alt="" name="13" class="tramphase'+index+'_arrow">\
                                <img src="static/south_east.png" alt="" name="11" class="tramphase'+index+'_arrow">\
                                <img src="static/south_north.png" alt="" name="10" class="tramphase'+index+'_arrow">\
                                <img src="static/south_west.png" alt="" name="9" class="tramphase'+index+'_arrow">\
                                <img src="static/west_south.png" alt="" name="8" class="tramphase'+index+'_arrow">\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            '        
        trams.insertAdjacentHTML("beforeend", block)
        arrows_tramphase = document.querySelectorAll(".tramphase"+index+"_arrow")
        //console.log("i = ", i, "phase[",i,"] = ",phase[i])
        arrows_tramphase.forEach((arrow)=>{arrow.addEventListener("click", function(e){
            if (train_routes[i][e.target.attributes.name.value-1] == 0){
                e.target.style.opacity = 1 
                train_routes[i][e.target.attributes.name.value-1] = 1
            }
            else {
                e.target.style.opacity = 0.35
                train_routes[i][e.target.attributes.name.value-1] = 0
            }
        })})
        
    }
}

function enterTramPhase(e){
    let trams = document.getElementById('trams')
    trams.innerHTML = ''
    block = '\
        <div class="phas">\
            <h3 class="tram_phase_title">Направление движения трамваев в трамвайной фазе</h3>\
            <div id="common">\
                <div id="middle">\
                    <div id="center">\
                        <div>\
                            <img src="static/east_north.png" name="15" alt="" class="tramphase">\
                            <img src="static/north_east.png" alt="" name="1" class="tramphase">\
                            <img src="static/north_south.png" alt="" name="2" class="tramphase">\
                            <img src="static/north_west.png" alt="" name="3" class="tramphase">\
                            <img src="static/west_north.png" alt="" name="5" class="tramphase">\
                        </div>\
                        <div>\
                            <img src="static/east_west.png" alt="" name="14" class="tramphase">\
                            <div></div>\
                            <div></div>\
                            <div></div>\
                            <img src="static/west_east.png" alt="" name="6" class="tramphase">\
                        </div>\
                        <div>\
                            <img src="static/east_south.png" alt="" name="13" class="tramphase">\
                            <img src="static/south_east.png" alt="" name="11" class="tramphase">\
                            <img src="static/south_north.png" alt="" name="10" class="tramphase">\
                            <img src="static/south_west.png" alt="" name="9" class="tramphase">\
                            <img src="static/west_south.png" alt="" name="7" class="tramphase">\
                        </div>\
                    </div>\
                </div>\
            </div>\
        '        
    trams.insertAdjacentHTML("beforeend", block)
    arrows_tramphase = document.querySelectorAll(".tramphase")
    arrows_tramphase.forEach((arrow)=>{arrow.addEventListener("click", function(e){
        let index = e.target.attributes.name.value-1
        if (single_train_routes[index] == 0){
            e.target.style.opacity = 1 
            single_train_routes[index] = 1
        }
        else {
            e.target.style.opacity = 0.35
            single_train_routes[index] = 0
        }
    })})
}

async function onload1(){
    document.querySelectorAll('.single_checks').forEach((value)=>value.addEventListener("click", function(e){

        if (e.target.name == 'north_right_check') 
            if (e.target.checked) checks[0]=1
            else checks[0]=0
        if (e.target.name == 'north_left_check') 
            if (e.target.checked) checks[1]=1
                else checks[1]=0
        if (e.target.name == 'west_right_check')
            if (e.target.checked) checks[2]=1
                else checks[2]=0
        if (e.target.name == 'west_left_check')
            if (e.target.checked) checks[3]=1
            else checks[3]=0
        if (e.target.name == 'south_right_check')
            if (e.target.checked) checks[4]=1
                else checks[4]=0
        if (e.target.name == 'south_left_check')
            if (e.target.checked) checks[5]=1
                else checks[5]=0
        if (e.target.name == 'east_right_check')
            if (e.target.checked) checks[6]=1
                else checks[6]=0
        if (e.target.name == 'east_left_check')
            if (e.target.checked) checks[7]=1
                else checks[7]=0
    }))
    document.getElementById("Prt").addEventListener("input", function(e){
        Prt = e.target.valueAsNumber
    })
    document.getElementById("Plt").addEventListener("input", function(e){
        Plt = e.target.valueAsNumber
    })
    result_head = document.getElementById("result_head")
    result_head.addEventListener("click", function(e) {func(e)})
    input_values = document.querySelectorAll(".input_values")
    input_values.forEach((value)=>{value.addEventListener("input", enterValues)})
    lines_values = document.querySelectorAll(".lines")
    lines_values.forEach((value)=>{value.addEventListener("input", enterLinesValues)})
    get_phases = document.getElementById('number_of_phases')
    get_phases.addEventListener('change', function(e) {
        number = e.target.valueAsNumber
        addContent(e)
        if (document.getElementById('tram_phase_check').checked == false) 
            enterTramValues()
    })
    get_phases.addEventListener('input', function(e) {
        number = e.target.valueAsNumber
        addContent(e)
        if (document.getElementById('tram_phase_check').checked == false) 
            enterTramValues()
    })
    document.getElementById("tram_phase_check").addEventListener("click", trams_add)
    document.getElementById("tram_phase_check").checked = false
    data_enters = document.querySelectorAll('.data_enter')
    data_enters.forEach((value)=>value.addEventListener("mouseover", picture_change))
    data_enters.forEach((value)=>value.addEventListener("mouseout", picture_back))
    data_enters.forEach((value)=>value.addEventListener("focus", picture_change))
    data_enters.forEach((value)=>value.addEventListener("blur", picture_back))

    document.getElementById("uklon_north").addEventListener("change", (e)=>{
        G[0] = e.target.value
    })
    document.getElementById("uklon_west").addEventListener("change", (e)=>{
        G[1] = e.target.value
    })
    document.getElementById("uklon_south").addEventListener("change", (e)=>{
        G[2] = e.target.value
    })
    document.getElementById("uklon_east").addEventListener("change", (e)=>{
        G[3] = e.target.value
    })
    document.getElementById("bus_amount_north").addEventListener("change", (e)=>{
        fbb[0] = e.target.value
    })
    document.getElementById("bus_amount_west").addEventListener("change", (e)=>{
        fbb[1] = e.target.value
    })
    document.getElementById("bus_amount_south").addEventListener("change", (e)=>{
        fbb[2] = e.target.value
    })
    document.getElementById("bus_amount_east").addEventListener("change", (e)=>{
        fbb[3] = e.target.value
    })
    document.getElementById("parking_amount_north").addEventListener("change", (e)=>{
        fp[0] = e.target.value
    })
    document.getElementById("parking_amount_west").addEventListener("change", (e)=>{
        fp[1] = e.target.value
    })
    document.getElementById("parking_amount_south").addEventListener("change", (e)=>{
        fp[2] = e.target.value
    })
    document.getElementById("parking_amount_east").addEventListener("change", (e)=>{
        fp[3] = e.target.value
    })
    document.querySelectorAll(".ped_intens").forEach(value=>value.addEventListener("change", (e)=>{
        ped_intens[e.target.name-1] = e.target.valueAsNumber
    }))
}

function picture_change(e){
    if (e.target.name == "road_width"){
        document.getElementById("image_data").style.backgroundImage = "url('static/c.png')"
    }
    if (e.target.name == "w"){
        document.getElementById("image_data").style.backgroundImage = "url('static/w.png')"
    }
    if (e.target.name == "b"){
        document.getElementById("image_data").style.backgroundImage = "url('static/b.png')"
    }
    if (e.target.name == "d"){
        document.getElementById("image_data").style.backgroundImage = "url('static/d.png')"
    }
    if (e.target.name == "g"){
        document.getElementById("image_data").style.backgroundImage = "url('static/g.png')"
    }
    
}


function picture_back(e){
    document.getElementById("image_data").style.backgroundImage = "url('static/cross.png')"
}

function trams_add(e) {
    if (e.target.checked == true) {
        tram_phase = 1
        enterTramPhase(e)
    }
    else {
        tram_phase = 0
        enterTramValues(e)
    }
}
