import { getNodeById } from "@nativescript/core/debugger/dom-node";

export type CategoryId = string;

export type TopLevelCategory = {
    id: CategoryId;
    title: string;
};

export type NavNode = {
    id: string;
    title: string;
    categoryId?: CategoryId;
    imgSrc?: string;
    childNodes?: NavNode[];
};

export const topLevelCats: TopLevelCategory[] = [
    {
        id: '0',
        title: 'Juvenile Idiopathic Arthritis'
    },
    {
        id: '1',
        title: 'Periodic Fever Syndromes'
    },
    {
        id: '2',
        title: 'Systemic Lupus Erythematosus'
    },
    {
        id: '3',
        title: 'Juvenile Dermatomyositis'
    },
    {
        id: '4',
        title: 'Vasculitis'
    },
    {
        id: '5',
        title: 'Scleroderma'
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
                    imgSrc: 'res://images/PFAPA/inclusion.png'
                },
                {
                    id: 'l12',
                    title: 'CTPs',
                    imgSrc: 'res://images/PFAPA/ctps.png'
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
                    imgSrc: 'res://images/Uveitis/exclusion_inclusion.png'
                },
                {
                    id: 'st22',
                    title: 'Methotrexate CTP',
                    childNodes: [
                        {
                            id: 'sl221',
                            title: 'Oral',
                            imgSrc: 'res://images/Uveitis/oral.png'
                        },
                        {
                            id: 'sl222',
                            title: 'Subcutaneous',
                            imgSrc: 'res://images/Uveitis/subcutaneous.png'
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
                            imgSrc: 'res://images/Uveitis/weekly.png'
                        },
                        {
                            id: 'Biweekly',
                            title: 'Subcutaneous',
                            imgSrc: 'res://images/Uveitis/biweekly.png'
                        },
                        {
                            id: 'sl233',
                            title: 'Infliximab',
                            imgSrc: 'res://images/Uveitis/inflix.png'
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
