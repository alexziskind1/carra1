import { getNodeById } from "@nativescript/core/debugger/dom-node";

export type CategoryId = string;

export type TopLevelCategory = {
    id: CategoryId;
    title: string;
    bgClass: string;
};

export type NavNode = {
    id: string;
    title: string;
    categoryId?: CategoryId;
    imgSrc?: string;
    childNodes?: NavNode[];
    note?: string;
};

export const topLevelCats: TopLevelCategory[] = [
    {
        id: '0',
        title: 'Juvenile Idiopathic Arthritis',
        bgClass: 'bg1'
    },
    {
        id: '1',
        title: 'Periodic Fever Syndromes',
        bgClass: 'bg2'
    },
    {
        id: '2',
        title: 'Systemic Lupus Erythematosus',
        bgClass: 'bg3'
    },
    {
        id: '3',
        title: 'Juvenile Dermatomyositis',
        bgClass: 'bg4'
    },
    {
        id: '4',
        title: 'Vasculitis',
        bgClass: 'bg5'
    },
    {
        id: '5',
        title: 'Scleroderma',
        bgClass: 'bg6'
    }
];

export const navData: NavNode = {
    id: 'root',
    title: 'home',
    childNodes: [
        {
            id: 't1',
            title: 'PFAPA',
            categoryId: '1',
            childNodes: [
                {
                    id: 'l11',
                    title: 'Inclusion Criteria',
                    imgSrc: 'res://images/PFAPA/inclusion.png',
                    note: 'Amarilyo G, Rothman D, Manthiram K, Edwards KM, Li SC, Marshall GS, Yildirim-Toruner C, Haines K, Ferguson PJ, Lionetti G, Cherian J, Zhao Y, DeLaMora P, Syverson G, Nativ S, Twilt M, Michelow IC, Stepanovskiy Y, Thatayatikom A, Harel L, Akoghlanian S, Tucker L, Marques MC, Srinivasalu H, Propst EJ, Licameli GR, Dedeoglu F, Lapidus S; CARRA PFAPA Consensus Treatment Plan Workgroup. Consensus treatment plans for periodic fever, aphthous stomatitis, pharyngitis and adenitis syndrome (PFAPA): a framework to evaluate treatment responses from the childhood arthritis and rheumatology research alliance (CARRA) PFAPA work group. Pediatr Rheumatol Online J. 2020 Apr 15;18(1):31. doi: 10.1186/s12969-020-00424-x. PMID: 32293478; PMCID: PMC7157990.'
                },
                {
                    id: 'l12',
                    title: 'CTPs',
                    imgSrc: 'res://images/PFAPA/ctps.png',
                    note: 'Amarilyo G, Rothman D, Manthiram K, Edwards KM, Li SC, Marshall GS, Yildirim-Toruner C, Haines K, Ferguson PJ, Lionetti G, Cherian J, Zhao Y, DeLaMora P, Syverson G, Nativ S, Twilt M, Michelow IC, Stepanovskiy Y, Thatayatikom A, Harel L, Akoghlanian S, Tucker L, Marques MC, Srinivasalu H, Propst EJ, Licameli GR, Dedeoglu F, Lapidus S; CARRA PFAPA Consensus Treatment Plan Workgroup. Consensus treatment plans for periodic fever, aphthous stomatitis, pharyngitis and adenitis syndrome (PFAPA): a framework to evaluate treatment responses from the childhood arthritis and rheumatology research alliance (CARRA) PFAPA work group. Pediatr Rheumatol Online J. 2020 Apr 15;18(1):31. doi: 10.1186/s12969-020-00424-x. PMID: 32293478; PMCID: PMC7157990.'
                }
            ]
        },
        {
            id: 't2',
            title: 'JIA - Associated & Idiopathic Chronic Anterior Uveitis',
            categoryId: '0',
            childNodes: [
                {
                    id: 'st21',
                    title: 'Inclusion Exclusion Criteria',
                    imgSrc: 'res://images/Uveitis/exclusion_inclusion.png',
                    note: 'Angeles-Han ST, Lo MS, Henderson LA, Lerman MA, Abramson L, Cooper AM, Parsa MF, Zemel LS, Ronis T, Beukelman T, Cox E, Sen HN, Holland GN, Brunner HI, Lasky A, Rabinovich CE; Juvenile Idiopathic Arthritis Disease-Specific and Uveitis Subcommittee of the Childhood Arthritis Rheumatology and Research Alliance. Childhood Arthritis and Rheumatology Research Alliance Consensus Treatment Plans for Juvenile Idiopathic Arthritis-Associated and Idiopathic Chronic Anterior Uveitis. Arthritis Care Res (Hoboken). 2019 Apr;71(4):482-491. doi: 10.1002/acr.23610. PMID: 29806733; PMCID: PMC6261704.'
                },
                {
                    id: 'st22',
                    title: 'Methotrexate CTP',
                    childNodes: [
                        {
                            id: 'sl221',
                            title: 'Oral',
                            imgSrc: 'res://images/Uveitis/oral.png',
                            note: 'Angeles-Han ST, Lo MS, Henderson LA, Lerman MA, Abramson L, Cooper AM, Parsa MF, Zemel LS, Ronis T, Beukelman T, Cox E, Sen HN, Holland GN, Brunner HI, Lasky A, Rabinovich CE; Juvenile Idiopathic Arthritis Disease-Specific and Uveitis Subcommittee of the Childhood Arthritis Rheumatology and Research Alliance. Childhood Arthritis and Rheumatology Research Alliance Consensus Treatment Plans for Juvenile Idiopathic Arthritis-Associated and Idiopathic Chronic Anterior Uveitis. Arthritis Care Res (Hoboken). 2019 Apr;71(4):482-491. doi: 10.1002/acr.23610. PMID: 29806733; PMCID: PMC6261704.'
                        },
                        {
                            id: 'sl222',
                            title: 'Subcutaneous',
                            imgSrc: 'res://images/Uveitis/subcutaneous.png',
                            note: 'Angeles-Han ST, Lo MS, Henderson LA, Lerman MA, Abramson L, Cooper AM, Parsa MF, Zemel LS, Ronis T, Beukelman T, Cox E, Sen HN, Holland GN, Brunner HI, Lasky A, Rabinovich CE; Juvenile Idiopathic Arthritis Disease-Specific and Uveitis Subcommittee of the Childhood Arthritis Rheumatology and Research Alliance. Childhood Arthritis and Rheumatology Research Alliance Consensus Treatment Plans for Juvenile Idiopathic Arthritis-Associated and Idiopathic Chronic Anterior Uveitis. Arthritis Care Res (Hoboken). 2019 Apr;71(4):482-491. doi: 10.1002/acr.23610. PMID: 29806733; PMCID: PMC6261704.'
                        }
                    ]
                },
                {
                    id: 'st23',
                    title: 'Anti-TNF CTPs',
                    childNodes: [
                        {
                            id: 'sl231',
                            title: 'Weekly',
                            imgSrc: 'res://images/Uveitis/weekly.png',
                            note: 'Angeles-Han ST, Lo MS, Henderson LA, Lerman MA, Abramson L, Cooper AM, Parsa MF, Zemel LS, Ronis T, Beukelman T, Cox E, Sen HN, Holland GN, Brunner HI, Lasky A, Rabinovich CE; Juvenile Idiopathic Arthritis Disease-Specific and Uveitis Subcommittee of the Childhood Arthritis Rheumatology and Research Alliance. Childhood Arthritis and Rheumatology Research Alliance Consensus Treatment Plans for Juvenile Idiopathic Arthritis-Associated and Idiopathic Chronic Anterior Uveitis. Arthritis Care Res (Hoboken). 2019 Apr;71(4):482-491. doi: 10.1002/acr.23610. PMID: 29806733; PMCID: PMC6261704.'
                        },
                        {
                            id: 'Biweekly',
                            title: 'Subcutaneous',
                            imgSrc: 'res://images/Uveitis/biweekly.png',
                            note: 'Angeles-Han ST, Lo MS, Henderson LA, Lerman MA, Abramson L, Cooper AM, Parsa MF, Zemel LS, Ronis T, Beukelman T, Cox E, Sen HN, Holland GN, Brunner HI, Lasky A, Rabinovich CE; Juvenile Idiopathic Arthritis Disease-Specific and Uveitis Subcommittee of the Childhood Arthritis Rheumatology and Research Alliance. Childhood Arthritis and Rheumatology Research Alliance Consensus Treatment Plans for Juvenile Idiopathic Arthritis-Associated and Idiopathic Chronic Anterior Uveitis. Arthritis Care Res (Hoboken). 2019 Apr;71(4):482-491. doi: 10.1002/acr.23610. PMID: 29806733; PMCID: PMC6261704.'
                        },
                        {
                            id: 'sl233',
                            title: 'Infliximab',
                            imgSrc: 'res://images/Uveitis/inflix.png',
                            note: 'Angeles-Han ST, Lo MS, Henderson LA, Lerman MA, Abramson L, Cooper AM, Parsa MF, Zemel LS, Ronis T, Beukelman T, Cox E, Sen HN, Holland GN, Brunner HI, Lasky A, Rabinovich CE; Juvenile Idiopathic Arthritis Disease-Specific and Uveitis Subcommittee of the Childhood Arthritis Rheumatology and Research Alliance. Childhood Arthritis and Rheumatology Research Alliance Consensus Treatment Plans for Juvenile Idiopathic Arthritis-Associated and Idiopathic Chronic Anterior Uveitis. Arthritis Care Res (Hoboken). 2019 Apr;71(4):482-491. doi: 10.1002/acr.23610. PMID: 29806733; PMCID: PMC6261704.'
                        }
                    ]
                }
            ]
        }
    ]
};

function getMatchNode(id: string, n: NavNode): NavNode {
    if (n.id === id) {
        return n;
    }
    if (n.childNodes && n.childNodes.length > 0) {
        for (let i = 0; i < n.childNodes.length; i++) {
            const rn = getMatchNode(id, n.childNodes[i]);
            if (rn) {
                return rn;
            }
        }
    }
}

function getMatchCategoryNode(catId: string, n: NavNode): NavNode {
    if (n.categoryId && n.categoryId === catId) {
        return n;
    }
    if (n.childNodes && n.childNodes.length > 0) {
        for (let i = 0; i < n.childNodes.length; i++) {
            const rn = getMatchCategoryNode(catId, n.childNodes[i]);
            if (rn) {
                return rn;
            }
        }
    }
}

export function findNavNodeById(id: string): NavNode {
    return getMatchNode(id, navData);
}

export function findNavNodeByCategoryId(catId: string): NavNode {
    return getMatchCategoryNode(catId, navData);
}

export function findCategoryById(catId: string): TopLevelCategory {
    for (let i = 0; i < topLevelCats.length; i++) {
        if (topLevelCats[i].id === catId) {
            return topLevelCats[i];
        }
    }
}
