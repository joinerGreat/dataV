var config={
    ip:"",//http://39.105.11.136:8080
	api:{
		getPeopleAndDustbinInfo:"/cp/people/getPeopleAndDustbinInfo",//总用户数，总积分数等，中间位置，地图下面
		getTree:"/cp/dustbin/getTree",//获取树等
        selectAddressWeight:"/cp/dustbin/selectAddressWeight",//获取垃圾统计数据
        getTypeWeight:"/cp/dustbin/getTypeWeight",//回收重量显示
        getTypeWeightRA:"/cp/dustbin/getTypeWeightRA",//回收重量占比显示
        getSevenWeight:"/cp/dustbin/getSevenWeight",//7日
		getCommunityWeight:"/cp/dustbin/getCommunityWeight",//重量排行榜
	},
	location:{
		title:"北京天坛花园",
		address:"北京天坛花园",
		gps:[116.417854,39.921988]
	}
}