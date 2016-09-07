    // Minors setup

    // 'options' : ['section name',section depth,classes required,credits required,repeatable credits]
    // Section name: 'name' to be displayed ("Business Common Core"), null if no name to display
    // Section depth: depth of tabs over, depth of subsection (used to format output files), integer > 0
    // Classes required: # of classes in list to be completed, integer > 0, 0 if all are required, null if credits-based or not applicable
    // Credits required: # of credits from list needed, enter null if based on # of classes or not applicable
    // Repeatable classes: true if classes can be repeated for credit, false if not

    // 'classes' : ['ABC 1234','XYZ 5678',['ABC 4567','ABC 4567L']]
    // Class names should be specified with department/course code and number with a space separating them

    // 'Example Minor':[
    //     {'options' : ['Test Core 1',1,2,null,false], 'classes' : ["ABC 123","XYZ 456"]},
    //     {'options' : ['Test Core 2',1,3,null,false], 'classes' : ["FGH 123","JKL 456"]},
    //     {'options' : ['Test Core 3',2,null,9,false], 'classes' : ["CHECK1","CHECK2"]},
    //     {'options' : ['Test Core 4',2,null,9,false], 'classes' : ["CHECKA","CHECKB"]},
    //     {'options' : ['Test Core 5',1,0,null,false], 'classes' : ["FGH 123","JKL 456"]}
    // }

minors = {
    'Advertising Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ADV 3008','MAR 3023','MAR 4333']},
        {'options' : [null,1,2,null,false],'classes' : ['ADV 3001','ADV 3101','ADV 3300']},
        {'options' : [null,1,1,null,false],'classes' : ['MAR 3235','MAR 3503','MAR 4310']}
    ],
    'Anthropology Minor':[
        {'options' : ['Minor Requirements',1,1,null,false],'classes' : ['ANT 2000','ANT 2040C','ANT 2211','ANT 2410']},
        {'options' : [null,1,1,null,false],'classes' : ['ANT 2100','ANT 2511C','BSC 2024C']},
        {'options' : ['Upper level ANT courses (3000-4999 level)',1,null,9,false],'classes' : ['ANT XXXX','ANT XXXX','ANT XXXX','ANT XXXX']}
    ],
    'Art History Minor':[
        {'options' : ['Minor Requirements',1,null,6,false],'classes' : ['ARH 2050','ARH 2051']},
        {'options' : ['Lower level courses (1000-2999 level)',1,null,3,false],'classes' : ['ART XXXX','ART XXXX','ARH XXXX','ARH XXXX','GRA XXXX','GRA XXXX','PGY XXXX','PGY XXXX']},
        {'options' : ['Upper level ARH courses (3000-4999 level)',1,null,9,false],'classes' : ['ARH XXXX','ARH XXXX','ARH XXXX','ARH XXXX']}
    ],
    'Art Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ART 1300']},
        {'options' : [null,1,1,null,false],'classes' : ['ARH 2050','ARH 2051']},
        {'options' : ['Lower level courses (1000-2999 level)',1,null,3,false],'classes' : ['ART XXXX','ART XXXX','ARH XXXX','ARH XXXX']},
        {'options' : ['Upper level courses (3000-4999 level)',1,null,9,false],'classes' : ['ART XXXX','ART XXXX','ART XXXX','ARH XXXX','ARH XXXX','ARH XXXX']}
    ],
    // FIX THIS
    'Bioengineering Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAP 2302']},
        {'options' : [null,1,1,null,false],'classes' : [['BME 3403C','BME 3404C'],'PCB 3703C','PCB 3723C']},
        {'options' : ['Students interested in Biomaterials and Biomechanics complete:',1,0,null,false],'classes' : ['BME 3100C','BME 4211C','EGM 3420C','EGN 3331C']},
        {'options' : ['Students interested in Biofluid Mechanics and Biotransport Phenomena complete:',1,0,null,false],'classes' : ['BME 3261C','BME 4632C','EGM 3420C','EGN 3331C']},
        {'options' : ['Students interested in Bioengineering Applications in Electricity and Medical Instrumentation complete:',1,0,null,false],'classes' : ['BME 4503C','BME 4504C','BME 3506C','BME 3507C']},
        {'options' : ['Engineering majors interested Bioengineering Design and Product Development complete:',1,0,null,false],'classes' : ['BME 3100C','BME 4211C','BME 4722','BME 4800C']},
    ],
    'Bioengineering Minor (Biomaterials and Biomechanics)':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAP 2302']},
        {'options' : [null,1,1,null,false],'classes' : [['BME 3403C','BME 3404C'],'PCB 3703C','PCB 3723C']},
        {'options' : ['Students interested in Biomaterials and Biomechanics complete:',1,0,null,false],'classes' : ['BME 3100C','BME 4211C','EGM 3420C','EGN 3331C']},
    ],
    'Bioengineering Minor (Biofluid Mechanics and Biotransport Phenomena)':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAP 2302']},
        {'options' : [null,1,1,null,false],'classes' : [['BME 3403C','BME 3404C'],'PCB 3703C','PCB 3723C']},
        {'options' : ['Students interested in Biofluid Mechanics and Biotransport Phenomena complete:',1,0,null,false],'classes' : ['BME 3261C','BME 4632C','EGM 3420C','EGN 3331C']},
    ],
    'Bioengineering Minor (Bioengineering Applications in Electricity and Medical Instrumentation)':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAP 2302']},
        {'options' : [null,1,1,null,false],'classes' : [['BME 3403C','BME 3404C'],'PCB 3703C','PCB 3723C']},
        {'options' : ['Students interested in Bioengineering Applications in Electricity and Medical Instrumentation complete:',1,0,null,false],'classes' : ['BME 4503C','BME 4504C','BME 3506C','BME 3507C']},
    ],
    'Bioengineering Minor (Bioengineering Design and Product Development)':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAP 2302']},
        {'options' : [null,1,1,null,false],'classes' : [['BME 3403C','BME 3404C'],'PCB 3703C','PCB 3723C']},
        {'options' : ['Engineering majors interested Bioengineering Design and Product Development complete:',1,0,null,false],'classes' : ['BME 3100C','BME 4211C','BME 4722','BME 4800C']},
    ],
    'Biology Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['PCB 3063C']},
        {'options' : [null,2,1,null,false],'classes' : ['BSC 1010C',['BSC 1010','BSC 1010L']]},
        {'options' : [null,2,1,null,false],'classes' : ['BSC 1011C',['BSC 1011','BSC 1011L']]},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,9,false],'classes' : ['ANS XXXX','ANS XXXX','ANS XXXX','BOT XXXX','BOT XXXX','BOT XXXX','BSC XXXX','BSC XXXX','BSC XXXX','MCB XXXX','MCB XXXX','MCB XXXX','PCB XXXX','PCB XXXX','PCB XXXX','ZOO XXXX','ZOO XXXX','ZOO XXXX']}
    ],
    'Chemistry Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['CHM 1045C',['CHM 1045','CHM 1045L']]},
        {'options' : [null,2,1,null,false],'classes' : ['CHM 1046C',['CHM 1046','CHM 1046L']]},
        {'options' : [null,2,1,null,false],'classes' : ['CHM 2210C',['CHM 2210','CHM 2210L']]},
        {'options' : [null,2,1,null,false],'classes' : ['CHM 2211C',['CHM 2211','CHM 2211L']]},
        {'options' : ['Students may not count BOTH BCH 3023C and BCH 4033C towards the minor',2,2,null,false],'classes' : ['BCH 3023C','BCH 3025C','BCH 4033C','BCH 4034C','CHM 3005C','CHM 3120C',['CHM 3610','CHM 3610L'],'CHM 4080C','CHM 4139C','CHM 4220','CHM 4230C','CHM 4300','CHM 4431','CHM 4671','CHM 4714','CHS 4533C','CHS 4544C']},
    ],
    'Climate Change Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['BSC 1010C',['BSC 1010','BSC 1010L']]},
        {'options' : [null,2,1,null,false],'classes' : ['BSC 1011C',['BSC 1011','BSC 1011L']]},
        {'options' : [null,2,0,null,false],'classes' : ['BSC 3303','EVR 2861','GLY 1000C']},
        {'options' : [null,2,1,null,false],'classes' : ['GLY 4074C','GLY 4244C']},
        {'options' : [null,2,1,null,false],'classes' : ['GLY 3603C','GLY 4700C']},
    ],
    'Community Planning and Development Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['SYD 4020','SYD 4603','SYG 2000']},
        {'options' : [null,2,1,null,false],'classes' : ['SYA 3300','SYA 3310']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['SYA XXXX','SYD XXXX','SYG XXXX','SYO XXXX','SYP XXXX']},
    ],
    'Computer Information Systems Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['CGS 1100','ISM 2051','ISM 3011','ISM 3212','ISM 3230']},
        {'options' : [null,2,1,null,false],'classes' : ['ISM 3220','ISM 3232','ISM 3400','ISM 4094']},
    ],
    'Computer Science Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['COP 1500','COP 2006','COP 2001','COP 3003','CEN 3031','CDA 3104']},
    ],
    'Creative Writing Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ENG 3014']},
        {'options' : [null,2,1,null,false],'classes' : ['CRW 2001','CRW 2732']},
        {'options' : [null,2,1,null,false],'classes' : ['CRW 3111','CRW 3311']},
        {'options' : [null,2,1,null,false],'classes' : ['CRW 2001','CRW 2732']},
        {'options' : [null,2,1,null,false],'classes' : ['CRW 4120','CRW 4320']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['AML XXXX','ENL XXXX','LIT XXXX']},
        {'options' : ['Complete any additional CRW course 3000-4999 that has not been used to fulfill a requirement above',2,null,3,false],'classes' : ['CRW 3111','CRW 3311','CRW 4120','CRW 4320']},
    ],
    'Critical Theory Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['COM 3343','LIT 3144','LIT 4213','LIT 4353','LIT 4853','LIT 4934']},
        {'options' : [null,2,1,null,false],'classes' : ['COM 3540','POT 3003','POT 3075','POT 3303','POT 4074','POT 4932','SPC 3230','SPC 3721']},
        {'options' : [null,2,2,null,false],'classes' : ['PHH 3501','PHH 3931','PHI 3223','PHI 3930','PHP 3786','PHM 4123','PHM 3101']},
        {'options' : ['Complete two additional electives (6 hours) from any of the above listed courses.',2,null,6,false],'classes' : ['COM 3343','LIT 3144','LIT 4213','LIT 4353','LIT 4853','LIT 4934','COM 3540','POT 3003','POT 3075','POT 3303','POT 4074','POT 4932','SPC 3230','SPC 3721','PHH 3501','PHH 3931','PHI 3223','PHI 3930','PHP 3786','PHM 4123','PHM 3101']},
    ],
    'Digital Media Design Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ART 1300','ART 2600','GRA 2190','GRA 2206']},
        {'options' : [null,1,2,null,false],'classes' : ['ART 3614','ART 3633','ART 3640','ART 3664','ART 4925','GRA 3193','GRA 4194']},
    ],
    'Earth and Space Science Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['GLY 1000C',['GLY 1000','GLY 1000L'],'GLY 1010C',['GLY 1010','GLY 1010L']]},
        {'options' : [null,2,1,null,false],'classes' : ['AST 2100C','AST 2004C']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['AST XXXX']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['GLY XXXX']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['AST XXXX','GLY XXXX']},
    ],
    'Economics Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ECO 2013','ECO 2023','ECO 3101','ECO 3203']},
        {'options' : ['Upper level courses (3000-4000 level)',1,null,6,false],'classes' : ['ECP XXXX','ECP XXXX','ECS XXXX','ECS XXXX','ECO XXXX','ECO XXXX']},
    ],
    'Education Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['EDF 3251','EDF 4424','EDG 4343','RED 4344','TSL 4340']},
        {'options' : [null,1,1,null,false],'classes' : ['EDF 3132','EDF 4112']},
    ],
    'English Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ENG 3014']},
        {'options' : ['Upper level courses (3000-4999 level)',1,null,12,false],'classes' : ['AML XXXX','AML XXXX','AML XXXX','AML XXXX','ENG XXXX','ENG XXXX','ENG XXXX','ENG XXXX','ENL XXXX','ENL XXXX','ENL XXXX','ENL XXXX','LIT XXXX','LIT XXXX','LIT XXXX','LIT XXXX']},
    ],
    'Entrepreneurship Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['ENT 2000','MAN 3025']},
        {'options' : [null,2,0,null,false],'classes' : ['ENT 3004','ENT 3114','ENT 3204']},
        {'options' : [null,2,1,null,false],'classes' : ['ACG 3341','ADV 3008','EGN 3641C','ENT 3273','HFT 3757','HFT 3802','HFT 4275','HFT 4380','MAN 3781','MAN 4602','MAR 3400','MAR 3503','MAR 4613','REE 3043']},
    ],
    'Environmental Education Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['ANT 2040C','EVR 4423','EVR 4424','EVR 4425','EVR 4914','EVR 4924']},
        {'options' : [null,1,1,null,false],'classes' : ['BSC 1051C','OCE 1001C']},
        {'options' : [null,1,null,6,false],'classes' : ['ANT 2410','BSC 3303','CRW 2732','EVR 2861','EVR 3025','EVR 4026','HUM 2395','IDS 3332','SPC 3543']},
        {'options' : ['There are additional non-required electives for this minor. See website for info.',1,null,null,false],'classes' : []}
    ],
    'French Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : ['Successful completion or testing out of',2,1,null,false],'classes' : [['FRE 1120C','FRE 1121C'],'FRE 1133C']},
        {'options' : [null,2,0,null,false],'classes' : ['FRE 2220C','FRE 2221C','FRE 3300','FRE 3410']},
        {'options' : ['Complete remainder of 17-22 credits if you have tested out of courses',2,null,null,false],'classes' : ['FRE 1952','FRE 4912','FRE 4930','FRT 3140','FRT 3550','FRT 3800','LIT 3144','LIT 3191']},
    ],
    'Gender Studies Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['BSC 2026','SYG 2220']},
        {'options' : [null,1,null,9,false],'classes' : ['AMH 3561','AMH 3562','AML 4624','CCJ 4663','CCJ 4681','COM 3014','EUH 4610','HIS 3938','LIT 3301','LIT 4493','LIT 4853','PHM 3101','PHM 4123','POS 4072','SOP 4777','SOW 4194','SOW 4274','SYD 3800','SYD 4020','SYO 3120','SYO 3530','THE 2430','WOH 3221']},
    ],
    'Geology Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['GLY 1000C']},
        {'options' : ['Minimum of 9 credit hours must be numbered 3000-4999',2,null,12,false],'classes' : ['GLY XXXX','GLY XXXX','GLY XXXX','GLY XXXX','GLY XXXX']},
    ],
    'German Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : ['Successful completion or testing out of',2,1,null,false],'classes' : ['GER 1120C','GER 1121C','GER 2220C','GER 2221C','GER 3300','GER 3410']},
        {'options' : ['Complete remainder of 17-22 credits if you have tested out of courses',2,null,null,false],'classes' : ['GER 1952','GET 2527','LIT 3144','LIT 3191','EUH 3465','GER 4906']},
    ],
    'Global Studies Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,2,null,false],'classes' : ['CPO 2001','INR 2015','INR 3003','ISS 2200','SYG 2010','SYG 2012']},
        {'options' : [null,2,2,null,false],'classes' : ['INR 4075','INR 4303','INR 4502','INR 4703','PUP 4206','SYD 4020','WOH 3044','WOH 3221','WOH 3231','WOH 4225']},
        {'options' : [null,2,2,null,false],'classes' : ['AFH 3100','AFH 3200','AFH 3443','AFH 3454','AFS 3251','ASH 3323','ASH 3404','ASH 3550','ASH 4442','CPO 3303','CPO 3403','CPO 3731','CPO 3760','CPO 4774','LAH 3200','LAH 3470','LAH 3724','LAH 3732','LAS 3007','LAS 3022','LIT 4353']},
    ],
    'History Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['AMH 2010','AMH 2020','WOH 1023','WOH 1030']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,15,false],'classes' : ['AFH XXXX','AFH XXXX','AFH XXXX','AFH XXXX','AFH XXXX','AMH XXXX','AMH XXXX','AMH XXXX','AMH XXXX','AMH XXXX','ASH XXXX','ASH XXXX','ASH XXXX','ASH XXXX','ASH XXXX','EUH XXXX','EUH XXXX','EUH XXXX','EUH XXXX','EUH XXXX','HIS XXXX','HIS XXXX','HIS XXXX','HIS XXXX','HIS XXXX','LAH XXXX','LAH XXXX','LAH XXXX','LAH XXXX','LAH XXXX','WOH XXXX','WOH XXXX','WOH XXXX','WOH XXXX','WOH XXXX']},
    ],
    'Interdisciplinary Studies Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['IDS 3143','IDS 3300','IDS 3332','IDS 3920','IDS 4910']},
    ],
    'Journalism Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['JOU 2100','JOU 3201','MMC 2604','MMC 2604L','MMC 3020','MMC 3125','MMC 4211']},
        {'options' : [null,2,1,null,false],'classes' : ['MMC 3104','RTV 3301']},
    ],
    'Latin American Studies Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['LAH 2020','LAS 2000']},
        {'options' : [null,2,1,null,false],'classes' : ['LAH 3130','LAH 3200']},
        {'options' : ['Maximum 8 hours from any of SPN 1120C, SPN 1121C, SPN 2220C, or SPN 2201C)',2,null,12,false],'classes' : ['AML 4630','ANT 3340','LAH XXXX','CPO 3303','LIT 3662','LIT 4192','SPN 1120C',['SPN 1120','SPN 1120L'],'SPN 1121C',['SPN 1121','SPN 1121L'],'SPN 2220C',['SPN 2220','SPN 2220L'],'SPN 2201C',['SPN 2201','SPN 2201L'],'SPT 3532']},
    ],
    'Management Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAN 3025','MAN 3046','MAN 3063','MAN 3301','MAN 3600','MAN 4720']},
    ],
    'Marketing Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAR 3023','MAR 3400','MAR 3503','MAR 4156']},
        {'options' : [null,1,2,null,false],'classes' : ['MAR 3235','MAR 4403','MAR 4841','ADV 3008']},
    ],
    'Mathematics Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['MAC 2311','MAC 2312','MAC 2313','MHF 2191']},
        {'options' : [null,1,1,null,false],'classes' : ['MAP 2302','MAS 3105']},
        {'options' : [null,1,1,null,false],'classes' : ['IDS 3143','MAA XXXX','MAD XXXX','MAP XXXX','MAS XXXX','MAT 4930','MHF 4404','STA 4234']},
    ],
    'Medieval and Early Modern Studies Minor':[
        {'options' : ['Minor Requirements',1,2,null,false],'classes' : ['ARH 2050','ENL 2012','EUH 2021','LIT 2110']},
        {'options' : [null,1,4,null,false],'classes' : ['ARH 3200','ARH 3301','ENL 3210','ENL 3220','ENL 3323','ENL 4191','ENL 4218','ENL 4295','ENL 4338','EUH 3121','EUH 3122','EUH 3142','EUH 4124','EUH 4180','EUH 4610','LIT 3374','LIT 3662','PHH 3050','PHI 3720','REL 3213','REL 3241']},
    ],
    'Museum Studies Minor (Museum Administration)':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['ANT 2040C','ANT 3942']},
        {'options' : [null,2,1,null,false],'classes' : ['ANT 3041','HIS 3065']},
        {'options' : [null,2,1,null,false],'classes' : ['ANT 3042C','ANT 3824L']},
        {'options' : ['Museum Studies electives',2,null,6,false],'classes' : ['CGS 1100','GEB 1011','PUR 3000','PUR 3100']},
    ],
    'Museum Studies Minor (Object Care and Exhibition)':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['ANT 2040C','ANT 3942']},
        {'options' : [null,2,1,null,false],'classes' : ['ANT 3041','HIS 3065']},
        {'options' : [null,2,1,null,false],'classes' : ['ANT 3042C','ANT 3824L']},
        {'options' : ['Museum Studies electives',2,null,6,false],'classes' : ['ART 1201','ART 1203']},
    ],
    'Museum Studies Minor (Interpretation and Educational Outreach)':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['ANT 2040C','ANT 3942']},
        {'options' : [null,2,1,null,false],'classes' : ['ANT 3041','HIS 3065']},
        {'options' : [null,2,1,null,false],'classes' : ['ANT 3042C','ANT 3824L']},
        {'options' : ['Museum Studies electives',2,null,6,false],'classes' : ['ANT 3231','ANT 3390','EEC 4203','EVR 4924','PUR 3100','SPC 2023','SPC 3721']},
    ],
    'Music Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : ['MUN XXXX','MUN XXXX','MUN XXXX','MUN XXXX','MUN XXXX','MUT 1111','MUT 1241','MVK 1111','MVx 1XXX','MVx 1XXX','MVx 2XXX','MVx 2XXX','MVx 3XXX']},
        {'options' : [null,1,1,null,false],'classes' : ['MUL 2010','MUH 2512']},
        {'options' : ['Upper level courses (3000-4999 level)',1,null,3,false],'classes' : ['MUx XXXX','MUx XXXX']},
    ],
    'Peace & Social Justice Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : ['Cultural Studies',2,null,6,false],'classes' : ['AML 4713','INR 2005','LIT 4353','POT 3075','POT 4514']},
        {'options' : ['Area Studies',2,null,3,false],'classes' : ['CPO 3303','CPO 3403','INR 4303']},
        {'options' : ['Legal Studies',2,null,3,false],'classes' : ['CCJ 4662','CJL 4415','POS 3691']},
        {'options' : ['Remaining Electives',2,null,3,false],'classes' : ['CPO 3303','CPO 3403','INR 4303','CCJ 4662','CJL 4415','POS 3691']},
    ],
    'Philosophy Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : ['Minimum of 12 credits at 3000-4999 level, no more than one from (EVR 3020, LIT 4213, MAN 2062, POT 3003)',2,null,15,false],'classes' : ['EVR 3020','LIT 4213','MAN 2062','POT 3003','PHH XXXX','PHH XXXX','PHH XXXX','PHH XXXX','PHH XXXX','PHI XXXX','PHI XXXX','PHI XXXX','PHI XXXX','PHI XXXX','PHM XXXX','PHM XXXX','PHM XXXX','PHM XXXX','PHM XXXX','PHP XXXX','PHP XXXX','PHP XXXX','PHP XXXX','PHP XXXX']},
    ],
    'Physics Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['PHY 2048C',['PHY 2048','PHY 2048L']]},
        {'options' : [null,2,1,null,false],'classes' : ['PHY 2049C',['PHY 2049','PHY 2049L']]},
        {'options' : [null,2,0,null,false],'classes' : ['PHY 3221','PHY 3323']},
        {'options' : [null,2,null,6,false],'classes' : ['AST 3211','PHY 3101','PHY 3513','PHY 4151C','PHY 4604','PHY 4905','PHY 4910']},
    ],
    'Political Science Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : ['Introductory Courses',2,2,null,false],'classes' : ['CPO 2001','INR 2005','INR 2015','POS 2041','POS 2112']},
        {'options' : ['Upper level courses (3000-4999 level)',2,0,null,false],'classes' : []},
        {'options' : ['American Politics/Public Administration Policy (except for POS 3043, POS 3272, POS 3703, POS 4905, POS 4941, or POS 4936)',3,null,3,false],'classes' : ['POS XXXX','PAD XXXX','PUP XXXX']},
        {'options' : ['Comparative Politics (except for CPO 3003 or CPO 4906)',3,null,3,false],'classes' : ['CPO XXXX']},
        {'options' : ['International Relations (except for INR 3003 or INR 4910)',3,null,3,false],'classes' : ['INR XXXX']},
        {'options' : ['Political Theory (except for POT 4906)',3,null,3,false],'classes' : ['POT XXXX']},
    ],
    'Psychology Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['PSY 2012','PSY 3017']},
        {'options' : [null,2,1,null,false],'classes' : ['PSY 3205','STA 2122']},
        {'options' : ['Upper level courses (3000-4999 level)',2,1,null,false],'classes' : ['CLP 4143','SOP 4004','DEP XXXX']},
        {'options' : [null,2,1,null,false],'classes' : ['EXP 4404','EXP 4604','PSB 4002']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['CBH XXXX','CLP XXXX','DEP XXXX','EXP XXXX','INP XXXX','INP XXXX','PPE XXXX','PSB XXXX','PSY XXXX','SOP XXXX']}, 
    ],
    'Real Estate Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : ['REE 3043','REE 3103','REE 3303','REE 3433']},
        {'options' : [null,1,1,null,false],'classes' : ['ECP 3613','REE 4204','REE 4905','REE 4930','REE 4941']},
    ],
    'Religious Studies Minor':[
        {'options' : ['Minor Requirements',1,null,9,false],'classes' : ['REL 2306','REL 3111','REL 3213','REL 3241','REL 3413','REL 3930','PHI 3720']},
        {'options' : [null,1,null,6,false],'classes' : ['REL 2306','REL 3111','REL 3213','REL 3241','REL 3413','REL 3930','PHI 3720','ANT 4241','ASH 3323','ASH 3404','EUH 3121','EUH 3122','EUH 3142','EUH 3241','EUH 4124','EUH 4180','PHH 3801','PHM 3101','PHP 3786']},
    ],
    'Sociology Minor':[
        {'options' : ['Minor Requirements',1,null,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['SYG 2000']},
        {'options' : [null,2,1,null,false],'classes' : ['SYA 3010','SYA 3120']},
        {'options' : [null,2,1,null,false],'classes' : ['SYA 3300','SYA 3310']},
        {'options' : [null,2,1,null,false],'classes' : ['SYO 3120','SYO 3530','SYP 3520']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,3,false],'classes' : ['SYA XXXX','SYD XXXX','SYG XXXX','SYO XXXX','SYP XXXX']},
    ],
    'Spanish Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : ['Successful completion or testing out of',2,1,null,false],'classes' : [['SPN 1120C','SPN 1121C'],'SPN 1134C']},
        {'options' : [null,2,0,null,false],'classes' : ['SPN 2220C','SPN 2221C','SPN 3300','SPN 3400']},
        {'options' : ['Complete remainder of 17-22 credits if you have tested out of courses',2,null,null,false],'classes' : ['SPN 2270','SPN 3140','SPN 3500','SPN 3520','SPN 4910','SPT 3100','SPT 3532','SPW 3100','SPW 3130','SPW 4930']},
    ],
    'Statistics Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['MAC 2233','MAC 2311']},
        {'options' : [null,2,null,6,false],'classes' : ['BME 4722','ISC 3120C','MAC 2312','MAP 3162','MAP 4101','PSY 3213','PSY 3213L','QMB 3200','STA 2122','SYA 3300','TRA 3163']},
        {'options' : [null,2,3,null,false],'classes' : ['MAC 2313','STA 3163','STA 4234','STA 4502','STA 4853']},
    ],
    'Supply Chain Management Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,1,null,false],'classes' : ['CGS 1100','COP 1500']},
        {'options' : [null,2,0,null,false],'classes' : ['ISM 3011','TRA 3151']},
        {'options' : [null,2,4,null,false],'classes' : ['ISM 4094','MAR 4203','TRA 3132','TRA 3163','TRA 3270']},  
    ],
    'Theatre Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : [null,2,0,null,false],'classes' : ['THE 2000']},
        {'options' : ['Lower level courses (1000-2999 level)',2,null,3,false],'classes' : ['DAA XXXX','THE XXXX','TPA XXXX','TPP XXXX']},
        {'options' : ['Upper level courses (3000-4999 level)',2,null,9,false],'classes' : ['DAA XXXX','THE XXXX','TPA XXXX','TPP XXXX']},
    ],
    'World Literature Minor':[
        {'options' : ['Minor Requirements',1,0,null,false],'classes' : []},
        {'options' : ['Foreign language - Demonstrate proficiency via standardized examination or 6-8 credit hours of coursework',2,null,null,false],'classes' : []},
        {'options' : [null,2,null,6,false],'classes' : ['AML 3682','LIT 3144','LIT 3191','LIT 3381','SPT 3100','SPT 3532','FRE 1952','FRT 3140','GER 1952','SPN 2270']},
        {'options' : [null,2,null,6,false],'classes' : ['AML 4604','AML 4630','AML 4703','LIT 4061','LIT 4192','LIT 4353','LIT 4355','FRE 1952','GER 1952','SPN 2270']},
    ]
}