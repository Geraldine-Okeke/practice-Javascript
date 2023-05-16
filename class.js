ass Universities{
	    constructor(faculties, vc, registrar){
		            this.faculties =["agric","arts","pharm","med"],
			            this.vc = "prof",
			            this.registrar = "Doctor"
		        }
	    building(){
		            console.log("here are hundred of bulding")
		        }
}
let unizik = new Universities
console.log(unizik.building())
class Futo extends Universities{
	    building(){
		            console.log("few buildings")
		        }
}
class Unn extends Universities{
	    building(){
		            super.building()
		            console.log("i love the buildings")
		        }
}
let subFuto = new Futo
let subunn = new Unn
subFuto.building()
subunn.building()
