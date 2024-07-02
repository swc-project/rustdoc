(function() {var implementors = {
"preset_env_base":[["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"preset_env_base/struct.BrowserDataMutIter.html\" title=\"struct preset_env_base::BrowserDataMutIter\">BrowserDataMutIter</a>&lt;'a, T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"preset_env_base/struct.BrowserDataRefIter.html\" title=\"struct preset_env_base::BrowserDataRefIter\">BrowserDataRefIter</a>&lt;'a, T&gt;"]],
"swc_common":[["impl&lt;B, F, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_common/util/iter/struct.ChainWith.html\" title=\"struct swc_common::util::iter::ChainWith\">ChainWith</a>&lt;B, F, I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a>&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; I,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = B::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</div>"],["impl&lt;It&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_common/iter/struct.Iter.html\" title=\"struct swc_common::iter::Iter\">Iter</a>&lt;It&gt;<div class=\"where\">where\n    It: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,</div>"]],
"swc_css_parser":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_css_parser/parser/input/struct.Input.html\" title=\"struct swc_css_parser::parser::input::Input\">Input</a>&lt;'a&gt;"],["impl&lt;I: Input&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_css_parser/lexer/struct.Lexer.html\" title=\"struct swc_css_parser::lexer::Lexer\">Lexer</a>&lt;'_, I&gt;"]],
"swc_ecma_parser":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_ecma_parser/input/struct.TokensInput.html\" title=\"struct swc_ecma_parser::input::TokensInput\">TokensInput</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_ecma_parser/lexer/struct.Lexer.html\" title=\"struct swc_ecma_parser::lexer::Lexer\">Lexer</a>&lt;'a&gt;"],["impl&lt;I: <a class=\"trait\" href=\"swc_ecma_parser/input/trait.Tokens.html\" title=\"trait swc_ecma_parser::input::Tokens\">Tokens</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_ecma_parser/input/struct.Capturing.html\" title=\"struct swc_ecma_parser::input::Capturing\">Capturing</a>&lt;I&gt;"]],
"swc_fast_graph":[["impl&lt;'a, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.Nodes.html\" title=\"struct swc_fast_graph::digraph::Nodes\">Nodes</a>&lt;'a, N&gt;<div class=\"where\">where\n    N: 'a + <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,</div>"],["impl&lt;'a, N, E, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.AllEdges.html\" title=\"struct swc_fast_graph::digraph::AllEdges\">AllEdges</a>&lt;'a, N, E, Ty&gt;<div class=\"where\">where\n    N: 'a + <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    E: 'a,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"],["impl&lt;'a, N, E, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.AllEdgesMut.html\" title=\"struct swc_fast_graph::digraph::AllEdgesMut\">AllEdgesMut</a>&lt;'a, N, E, Ty&gt;<div class=\"where\">where\n    N: 'a + <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    E: 'a,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"],["impl&lt;'a, N, E, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.Edges.html\" title=\"struct swc_fast_graph::digraph::Edges\">Edges</a>&lt;'a, N, E, Ty&gt;<div class=\"where\">where\n    N: 'a + <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    E: 'a,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"],["impl&lt;'a, N, E, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.NodeIdentifiers.html\" title=\"struct swc_fast_graph::digraph::NodeIdentifiers\">NodeIdentifiers</a>&lt;'a, N, E, Ty&gt;<div class=\"where\">where\n    N: 'a + <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    E: 'a,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"],["impl&lt;'a, N, E, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.NodeReferences.html\" title=\"struct swc_fast_graph::digraph::NodeReferences\">NodeReferences</a>&lt;'a, N, E, Ty&gt;<div class=\"where\">where\n    N: 'a + <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    E: 'a,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"],["impl&lt;'a, N, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.Neighbors.html\" title=\"struct swc_fast_graph::digraph::Neighbors\">Neighbors</a>&lt;'a, N, Ty&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"],["impl&lt;'a, N, Ty&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_fast_graph/digraph/struct.NeighborsDirected.html\" title=\"struct swc_fast_graph::digraph::NeighborsDirected\">NeighborsDirected</a>&lt;'a, N, Ty&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"swc_fast_graph/digraph/trait.NodeTrait.html\" title=\"trait swc_fast_graph::digraph::NodeTrait\">NodeTrait</a>,\n    Ty: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/trait.EdgeType.html\" title=\"trait petgraph::EdgeType\">EdgeType</a>,</div>"]],
"swc_html_parser":[["impl&lt;I: Input&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_html_parser/lexer/struct.Lexer.html\" title=\"struct swc_html_parser::lexer::Lexer\">Lexer</a>&lt;I&gt;"]],
"swc_xml_parser":[["impl&lt;I: Input&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"swc_xml_parser/lexer/struct.Lexer.html\" title=\"struct swc_xml_parser::lexer::Lexer\">Lexer</a>&lt;I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()