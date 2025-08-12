"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Search,
  Users,
  MousePointer,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
} from "lucide-react";

// Mock data for the dashboard
const searchTrends = [
  { date: "Jan 1", searches: 1200, sessions: 450, ctr: 12.5, resultRate: 85 },
  { date: "Jan 8", searches: 1350, sessions: 520, ctr: 14.2, resultRate: 87 },
  { date: "Jan 15", searches: 1180, sessions: 480, ctr: 11.8, resultRate: 82 },
  { date: "Jan 22", searches: 1420, sessions: 580, ctr: 15.1, resultRate: 89 },
  { date: "Jan 29", searches: 1650, sessions: 640, ctr: 16.8, resultRate: 91 },
  { date: "Feb 5", searches: 1580, sessions: 610, ctr: 15.9, resultRate: 88 },
  { date: "Feb 12", searches: 1720, sessions: 680, ctr: 17.2, resultRate: 92 },
];

const topQueries = [
  { query: "product documentation", searches: 2840, ctr: 18.5, trend: "up" },
  { query: "api reference", searches: 2120, ctr: 22.1, trend: "up" },
  { query: "getting started", searches: 1890, ctr: 15.2, trend: "down" },
  { query: "troubleshooting", searches: 1650, ctr: 12.8, trend: "up" },
  { query: "integration guide", searches: 1420, ctr: 19.3, trend: "up" },
];

const entityDistribution = [
  { name: "Documentation", value: 45, color: "#2563eb" },
  { name: "API Reference", value: 28, color: "#7c3aed" },
  { name: "Tutorials", value: 15, color: "#059669" },
  { name: "Support", value: 12, color: "#dc2626" },
];

const topClickedEntities = [
  { entityId: "doc-001", entityName: "Getting Started Guide", clicks: 1247 },
  { entityId: "api-045", entityName: "Authentication API", clicks: 892 },
  { entityId: "doc-023", entityName: "Installation Guide", clicks: 756 },
  { entityId: "api-112", entityName: "User Management API", clicks: 634 },
  {
    entityId: "tut-008",
    entityName: "First Integration Tutorial",
    clicks: 521,
  },
  { entityId: "doc-067", entityName: "Configuration Reference", clicks: 487 },
  { entityId: "api-089", entityName: "Webhook API", clicks: 423 },
  { entityId: "sup-015", entityName: "Common Issues FAQ", clicks: 398 },
];

export default function SearchOverview() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Search Analytics Overview
            </h1>
            <p className="text-slate-600 mt-1">
              Comprehensive insights and recommendations for your search
              performance
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button size="sm">
              <Zap className="w-4 h-4 mr-2" />
              Optimize Search
            </Button>
          </div>
        </div>

        {/* AI Insights Banner */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-1">
                  AI-Powered Insights
                </h3>
                <p className="text-blue-800 text-sm mb-3">
                  Your search performance has improved 23% this month. CTR is
                  trending upward, but result rate needs attention for "getting
                  started" queries.
                </p>
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Performance Up 23%
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800"
                  >
                    <AlertTriangle className="w-3 h-3 mr-1" />3 Optimization
                    Opportunities
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Search className="w-4 h-4" />
                Total Searches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">11,860</div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-600">+18.2%</span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Search Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">4,280</div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-600">+12.5%</span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <MousePointer className="w-4 h-4" />
                Click Through Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">16.8%</div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-600">+2.3%</span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Result Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">88.5%</div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <TrendingDown className="w-3 h-3 text-red-600" />
                <span className="text-red-600">-1.8%</span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Searches per Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">2.77</div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <TrendingDown className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-600">-5.1%</span>
                <span className="text-slate-500">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Search Volume Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Search Volume Trends</CardTitle>
              <CardDescription>Weekly search volume over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  searches: { label: "Searches", color: "#2563eb" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={searchTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="searches"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={{ fill: "#2563eb" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* CTR Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Click-Through Rate Trends</CardTitle>
              <CardDescription>
                Weekly CTR performance over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  ctr: { label: "CTR %", color: "#7c3aed" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={searchTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="ctr"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      dot={{ fill: "#7c3aed" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Entity Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Entity Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Search Result Distribution</CardTitle>
              <CardDescription>
                Breakdown of search results by content type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  documentation: { label: "Documentation", color: "#2563eb" },
                  api: { label: "API Reference", color: "#7c3aed" },
                  tutorials: { label: "Tutorials", color: "#059669" },
                  support: { label: "Support", color: "#dc2626" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={entityDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {entityDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {entityDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-600">{item.name}</span>
                    <span className="text-sm font-medium text-slate-900">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Clicked Entities */}
          <Card>
            <CardHeader>
              <CardTitle>Top Clicked Entities</CardTitle>
              <CardDescription>
                Most frequently clicked search results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-12 gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200">
                  <div className="col-span-3">Entity ID</div>
                  <div className="col-span-7">Entity Name</div>
                  <div className="col-span-2 text-right">Clicks</div>
                </div>
                {topClickedEntities.map((entity, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center py-2 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <div className="col-span-3">
                      <span className="text-sm font-mono text-slate-600">
                        {entity.entityId}
                      </span>
                    </div>
                    <div className="col-span-7">
                      <span className="text-sm font-medium text-slate-900">
                        {entity.entityName}
                      </span>
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="text-sm font-semibold text-slate-900">
                        {entity.clicks.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Queries and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Queries */}
          <Card>
            <CardHeader>
              <CardTitle>Top Search Queries</CardTitle>
              <CardDescription>
                Most popular searches with performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topQueries.map((query, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900">
                          {query.query}
                        </span>
                        {query.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        {query.searches.toLocaleString()} searches • {query.ctr}
                        % CTR
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Optimization Recommendations</CardTitle>
              <CardDescription>
                AI-powered suggestions to improve search performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900">
                      Low Result Rate for "Getting Started"
                    </h4>
                    <p className="text-sm text-red-800 mt-1">
                      Only 76% of "getting started" queries return results.
                      Consider adding more beginner-friendly content.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-red-300 text-red-700 hover:bg-red-100 bg-transparent"
                    >
                      Review Content Gaps
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <Target className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-900">
                      Optimize API Reference Ranking
                    </h4>
                    <p className="text-sm text-amber-800 mt-1">
                      API reference queries have high CTR but could rank higher.
                      Boost relevance scoring.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-amber-300 text-amber-700 hover:bg-amber-100 bg-transparent"
                    >
                      Adjust Rankings
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-emerald-900">
                      Strong Documentation Performance
                    </h4>
                    <p className="text-sm text-emerald-800 mt-1">
                      Documentation searches show excellent engagement. Consider
                      expanding similar content.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-emerald-300 text-emerald-700 hover:bg-emerald-100 bg-transparent"
                    >
                      Expand Content
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Health Score */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Search Health Score</CardTitle>
            <CardDescription>
              Comprehensive assessment of your search system performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  87
                </div>
                <div className="text-sm text-slate-600 mb-3">Overall Score</div>
                <Progress value={87} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Relevance</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Performance</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Coverage</span>
                  <span className="text-sm font-medium">84%</span>
                </div>
              </div>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-800"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Excellent CTR
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Growing Usage
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-800"
                >
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Coverage Gaps
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
