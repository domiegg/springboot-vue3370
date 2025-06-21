const base = {
    get() {
        return {
            url : "http://localhost:8080/springcloudk02l8/",
            name: "springcloudk02l8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springcloudk02l8/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "分布式架构网上商城"
        } 
    }
}
export default base
