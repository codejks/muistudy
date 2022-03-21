const SymbolList = {
    idx : 1,
    name : '기본군대부호',
    children: [
        {
            idx : 1,
            name : '우주항적',
        },
        {
            idx : 2,
            name : '공중항적',
        },
        {
            idx : 3,
            name : '지상항적',
            children: [
                {
                    idx : 1,
                    name : '부대',
                    children: [
                        {
                            idx : 1,
                            name : '전투',
                        },
                        {
                            idx : 2,
                            name : '전투지원'
                        },
                        {
                            idx : 3,
                            name : '전투근무지원'
                        }
                    ]
                }
            ],
        }
    ],    
};
export default SymbolList;